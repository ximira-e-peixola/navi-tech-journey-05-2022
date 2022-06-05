import gdal from 'gdal'
import express from "express";
import bodyParser from 'body-parser';
import center from '@turf/center'
import area from '@turf/area'
import EstadosPorRegiao from './aneel/IBGE_EstadosPorRegiao.json'
import TarifaMediaFornecimento from './aneel/TarifaMediaFornecimento.json'

const app = express();
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello from express and typescript');
});

/*
This endpoint is used to calculate the estimated power output of a solar panel given the disponible area and the estimated location of the panel.
@param {geojson} draw - The geojson of the disponible area

@returns {json} - Object containing the estimated power output of the panel, the estimated GTI, the estimated area of the panel, the estimated monthly return of the panel and the number of panels needed to cover the area.
@units {kWh/m2} - out
@units {m2} - area
@units {kWh} - estimated_output
@units {R$} - estimated_real
*/

app.post("/api/calculate", (req, res) => {
    if(!req.body.draw){
        res.status(400).send("No draw data provided");
    }
    if(!req.body.location){
        res.status(400).send("No location data provided");
    }
    if(!req.body.consumer){
        res.status(400).send("No consumer data provided");
    }

    const draw = req.body.draw;
    const location = req.body.location;
    const consumer = req.body.consumer;

    const c = center(draw)
    const a = area(draw)

    const pointLon = c.geometry.coordinates[0]
    const pointLat = c.geometry.coordinates[1]
    const dataset = gdal.open('./tifs/GTI.tif')
    const band = dataset.bands.get(1)
    const coordinateTransform = new gdal.CoordinateTransformation(gdal.SpatialReference.fromEPSG(4326), dataset);
    const pt = coordinateTransform.transformPoint(pointLon, pointLat);
    const value = band.pixels.get(pt.x, pt.y)

    const regiao = EstadosPorRegiao.find((estado) => estado.sigla === location.state_code || estado.nome === location.state)?.regiao?.nome
    
    let tarifa = TarifaMediaFornecimento.filter(tarifa => tarifa.nomClasseConsumo === consumer).find(tarifa => tarifa.nomRegiao === regiao)
    if(!tarifa){
        tarifa = TarifaMediaFornecimento.find(tarifa => tarifa.nomRegiao === "Brasil" && tarifa.nomClasseConsumo === 'Residencial')
    }

    const vlrConsumoMWh = Number(tarifa?.vlrConsumoMWh ?? 0)
    const solar_panel_area = 1.6
    const n_solar_panel = Math.round((a*0.9)/solar_panel_area)
    const value_real = ((value*n_solar_panel*solar_panel_area)/100) * vlrConsumoMWh
     
    res.send({ out: value, area: a, estimated_output: value * a, estimated_real: value_real, n_solar_panel });
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on PORT ${port}`));