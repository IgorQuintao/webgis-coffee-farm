ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31983").setExtent([716734.313062, 7695489.903672, 716861.904516, 7695845.801622]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_perimetro_area_exp_1 = new ol.format.GeoJSON();
var features_perimetro_area_exp_1 = format_perimetro_area_exp_1.readFeatures(json_perimetro_area_exp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_perimetro_area_exp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_perimetro_area_exp_1.addFeatures(features_perimetro_area_exp_1);
var lyr_perimetro_area_exp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_perimetro_area_exp_1, 
                style: style_perimetro_area_exp_1,
                popuplayertitle: 'perimetro_area_exp',
                interactive: false,
                title: '<img src="styles/legend/perimetro_area_exp_1.png" /> perimetro_area_exp'
            });
var format_Celulas_2 = new ol.format.GeoJSON();
var features_Celulas_2 = format_Celulas_2.readFeatures(json_Celulas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Celulas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Celulas_2.addFeatures(features_Celulas_2);
var lyr_Celulas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Celulas_2, 
                style: style_Celulas_2,
                popuplayertitle: 'Celulas',
                interactive: false,
                title: '<img src="styles/legend/Celulas_2.png" /> Celulas'
            });
var format_pontos_campo_geral_3 = new ol.format.GeoJSON();
var features_pontos_campo_geral_3 = format_pontos_campo_geral_3.readFeatures(json_pontos_campo_geral_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_pontos_campo_geral_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pontos_campo_geral_3.addFeatures(features_pontos_campo_geral_3);
var lyr_pontos_campo_geral_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pontos_campo_geral_3, 
                style: style_pontos_campo_geral_3,
                popuplayertitle: 'pontos_campo_geral',
                interactive: true,
    title: 'pontos_campo_geral<br />\
    <img src="styles/legend/pontos_campo_geral_3_0.png" /> 55<br />\
    <img src="styles/legend/pontos_campo_geral_3_1.png" /> 123<br />\
    <img src="styles/legend/pontos_campo_geral_3_2.png" /> 185<br />' });
var format_Amostras_Celulas_4 = new ol.format.GeoJSON();
var features_Amostras_Celulas_4 = format_Amostras_Celulas_4.readFeatures(json_Amostras_Celulas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Amostras_Celulas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Amostras_Celulas_4.addFeatures(features_Amostras_Celulas_4);
var lyr_Amostras_Celulas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Amostras_Celulas_4, 
                style: style_Amostras_Celulas_4,
                popuplayertitle: 'Amostras_Celulas',
                interactive: true,
                title: '<img src="styles/legend/Amostras_Celulas_4.png" /> Amostras_Celulas'
            });
var group_CafeMestradoIgor = new ol.layer.Group({
                                layers: [lyr_perimetro_area_exp_1,lyr_Celulas_2,lyr_pontos_campo_geral_3,lyr_Amostras_Celulas_4,],
                                fold: 'open',
                                title: 'Cafe-Mestrado-Igor'});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_perimetro_area_exp_1.setVisible(false);lyr_Celulas_2.setVisible(true);lyr_pontos_campo_geral_3.setVisible(true);lyr_Amostras_Celulas_4.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,group_CafeMestradoIgor];
lyr_perimetro_area_exp_1.set('fieldAliases', {'id': 'id', });
lyr_Celulas_2.set('fieldAliases', {'id': 'id', 'celula': 'celula', });
lyr_pontos_campo_geral_3.set('fieldAliases', {'ID': 'ID', 'data': 'data', 'hora': 'hora', 'chave': 'chave', 'dose rec (': 'dose rec (', 'stp': 'stp', 'lat': 'lat', 'long': 'long', 'x': 'x', 'y': 'y', 'modo': 'modo', 'celula': 'celula', 'dose aplic': 'dose aplic', });
lyr_Amostras_Celulas_4.set('fieldAliases', {'celula': 'celula', });
lyr_perimetro_area_exp_1.set('fieldImages', {'id': '', });
lyr_Celulas_2.set('fieldImages', {'id': 'TextEdit', 'celula': 'TextEdit', });
lyr_pontos_campo_geral_3.set('fieldImages', {'ID': 'TextEdit', 'data': 'TextEdit', 'hora': 'TextEdit', 'chave': 'TextEdit', 'dose rec (': 'TextEdit', 'stp': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'modo': 'TextEdit', 'celula': 'TextEdit', 'dose aplic': 'TextEdit', });
lyr_Amostras_Celulas_4.set('fieldImages', {'celula': 'TextEdit', });
lyr_perimetro_area_exp_1.set('fieldLabels', {'id': 'hidden field', });
lyr_Celulas_2.set('fieldLabels', {'id': 'hidden field', 'celula': 'no label', });
lyr_pontos_campo_geral_3.set('fieldLabels', {'ID': 'hidden field', 'data': 'no label', 'hora': 'no label', 'chave': 'hidden field', 'dose rec (': 'no label', 'stp': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'x': 'no label', 'y': 'no label', 'modo': 'hidden field', 'celula': 'no label', 'dose aplic': 'no label', });
lyr_Amostras_Celulas_4.set('fieldLabels', {'celula': 'no label', });
lyr_Amostras_Celulas_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});