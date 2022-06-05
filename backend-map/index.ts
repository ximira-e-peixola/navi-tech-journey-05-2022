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

app.post("/api/calculate", (req, res) => {
    const c = center(req.body.draw)
    const a = area(req.body.draw)
    
    const point_lon = c.geometry.coordinates[0]
    const point_lat = c.geometry.coordinates[1]
    const dataset = gdal.open('./tifs/PVOUT.tif')
    const band = dataset.bands.get(1)
    const coordinateTransform = new gdal.CoordinateTransformation(gdal.SpatialReference.fromEPSG(4326), dataset);
    const pt = coordinateTransform.transformPoint(point_lon, point_lat);
    const value = band.pixels.get(pt.x, pt.y)
    console.log(pt.x, pt.y, value);
    
    res.send({pvout: value, area: a});
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on PORT ${port}`));