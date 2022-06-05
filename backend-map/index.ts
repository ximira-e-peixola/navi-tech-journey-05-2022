import gdal from 'gdal'
import express from "express";
import bodyParser from 'body-parser';
import center from '@turf/center'
import area from '@turf/area'

const app = express();
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello from express and typescript');
});

/*
This endpoint is used to calculate the estimated power output of a solar panel given the disponible area and the estimated location of the panel.
@param {geojson} draw - The geojson of the disponible area

@returns {json} - Object containing the estimated power output of the panel, the estimated GTI and the estimated area of the panel
@units {kWh/m2} - out
@units {m2} - area
@units {kWh} - estimated_output
*/
// out: kWh/m2
// area: m2
// estimated_output: kWh
app.post("/api/calculate", (req, res) => {
    if(!req.body.draw){
        res.status(400).send("No draw data provided");
    }
    const draw = req.body.draw;
    const c = center(draw)
    const a = area(draw)

    const pointLon = c.geometry.coordinates[0]
    const pointLat = c.geometry.coordinates[1]
    const dataset = gdal.open('./tifs/GTI.tif')
    const band = dataset.bands.get(1)
    const coordinateTransform = new gdal.CoordinateTransformation(gdal.SpatialReference.fromEPSG(4326), dataset);
    const pt = coordinateTransform.transformPoint(pointLon, pointLat);
    const value = band.pixels.get(pt.x, pt.y)
    
    res.send({ out: value, area: a, estimated_output: value * a });
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on PORT ${port}`));