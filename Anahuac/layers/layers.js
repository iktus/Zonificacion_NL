var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_C19005_Zonificacion_Primaria_FOA_2023_1 = new ol.format.GeoJSON();
var features_C19005_Zonificacion_Primaria_FOA_2023_1 = format_C19005_Zonificacion_Primaria_FOA_2023_1.readFeatures(json_C19005_Zonificacion_Primaria_FOA_2023_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_C19005_Zonificacion_Primaria_FOA_2023_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C19005_Zonificacion_Primaria_FOA_2023_1.addFeatures(features_C19005_Zonificacion_Primaria_FOA_2023_1);
var lyr_C19005_Zonificacion_Primaria_FOA_2023_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C19005_Zonificacion_Primaria_FOA_2023_1, 
                style: style_C19005_Zonificacion_Primaria_FOA_2023_1,
                popuplayertitle: 'C19005_Zonificacion_Primaria_FOA_2023',
                interactive: true,
    title: 'C19005_Zonificacion_Primaria_FOA_2023<br />\
    <img src="styles/legend/C19005_Zonificacion_Primaria_FOA_2023_1_0.png" /> Área no urbanizable<br />\
    <img src="styles/legend/C19005_Zonificacion_Primaria_FOA_2023_1_1.png" /> Área urbana<br />\
    <img src="styles/legend/C19005_Zonificacion_Primaria_FOA_2023_1_2.png" /> Área urbanizable<br />\
    <img src="styles/legend/C19005_Zonificacion_Primaria_FOA_2023_1_3.png" /> AREA URBANIZABLE (Polígono de Actuación)<br />' });
var format_C19005_Zonificacion_Secundaria_FOA_2023_2 = new ol.format.GeoJSON();
var features_C19005_Zonificacion_Secundaria_FOA_2023_2 = format_C19005_Zonificacion_Secundaria_FOA_2023_2.readFeatures(json_C19005_Zonificacion_Secundaria_FOA_2023_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_C19005_Zonificacion_Secundaria_FOA_2023_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C19005_Zonificacion_Secundaria_FOA_2023_2.addFeatures(features_C19005_Zonificacion_Secundaria_FOA_2023_2);
var lyr_C19005_Zonificacion_Secundaria_FOA_2023_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C19005_Zonificacion_Secundaria_FOA_2023_2, 
                style: style_C19005_Zonificacion_Secundaria_FOA_2023_2,
                popuplayertitle: 'C19005_Zonificacion_Secundaria_FOA_2023',
                interactive: true,
    title: 'C19005_Zonificacion_Secundaria_FOA_2023<br />\
    <img src="styles/legend/C19005_Zonificacion_Secundaria_FOA_2023_2_0.png" /> Habitacional Densidad Baja<br />\
    <img src="styles/legend/C19005_Zonificacion_Secundaria_FOA_2023_2_1.png" /> Habitacional Densidad Media<br />\
    <img src="styles/legend/C19005_Zonificacion_Secundaria_FOA_2023_2_2.png" /> Habitacional Densidad Alta<br />\
    <img src="styles/legend/C19005_Zonificacion_Secundaria_FOA_2023_2_3.png" /> Habitacional Mixto<br />\
    <img src="styles/legend/C19005_Zonificacion_Secundaria_FOA_2023_2_4.png" /> Comercio y Servicios<br />\
    <img src="styles/legend/C19005_Zonificacion_Secundaria_FOA_2023_2_5.png" /> Equipamiento Público<br />\
    <img src="styles/legend/C19005_Zonificacion_Secundaria_FOA_2023_2_6.png" /> Espacios Púbicos o Áreas Verdes<br />\
    <img src="styles/legend/C19005_Zonificacion_Secundaria_FOA_2023_2_7.png" /> Industria<br />\
    <img src="styles/legend/C19005_Zonificacion_Secundaria_FOA_2023_2_8.png" /> Rural<br />\
    <img src="styles/legend/C19005_Zonificacion_Secundaria_FOA_2023_2_9.png" /> Polígonos de Actuación<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_C19005_Zonificacion_Primaria_FOA_2023_1.setVisible(true);lyr_C19005_Zonificacion_Secundaria_FOA_2023_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_C19005_Zonificacion_Primaria_FOA_2023_1,lyr_C19005_Zonificacion_Secundaria_FOA_2023_2];
lyr_C19005_Zonificacion_Primaria_FOA_2023_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'NOM_ENT': 'NOM_ENT', 'SUP_Ha': 'SUP_Ha', 'ZONIF_PRIM': 'ZONIF_PRIM', 'HORIZONTES': 'HORIZONTES', 'Uso_G': 'Uso_G', });
lyr_C19005_Zonificacion_Secundaria_FOA_2023_2.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOM_ENT': 'NOM_ENT', 'SUP_Ha': 'SUP_Ha', 'ZONIF_PRIM': 'ZONIF_PRIM', 'Uso_G': 'Uso_G', 'NOM_MUN': 'NOM_MUN', 'ZON_SEC_GR': 'ZON_SEC_GR', 'DESCRIPCIO': 'DESCRIPCIO', });
lyr_C19005_Zonificacion_Primaria_FOA_2023_1.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'NOM_ENT': 'TextEdit', 'SUP_Ha': 'TextEdit', 'ZONIF_PRIM': 'TextEdit', 'HORIZONTES': 'TextEdit', 'Uso_G': 'TextEdit', });
lyr_C19005_Zonificacion_Secundaria_FOA_2023_2.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOM_ENT': 'TextEdit', 'SUP_Ha': 'TextEdit', 'ZONIF_PRIM': 'TextEdit', 'Uso_G': 'TextEdit', 'NOM_MUN': 'TextEdit', 'ZON_SEC_GR': 'TextEdit', 'DESCRIPCIO': 'TextEdit', });
lyr_C19005_Zonificacion_Primaria_FOA_2023_1.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'NOM_ENT': 'no label', 'SUP_Ha': 'no label', 'ZONIF_PRIM': 'no label', 'HORIZONTES': 'no label', 'Uso_G': 'no label', });
lyr_C19005_Zonificacion_Secundaria_FOA_2023_2.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOM_ENT': 'no label', 'SUP_Ha': 'no label', 'ZONIF_PRIM': 'no label', 'Uso_G': 'no label', 'NOM_MUN': 'no label', 'ZON_SEC_GR': 'no label', 'DESCRIPCIO': 'no label', });
lyr_C19005_Zonificacion_Secundaria_FOA_2023_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});