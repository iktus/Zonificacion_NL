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
var format_C19005_CUERPO_AGUA_INEGI_2022_3 = new ol.format.GeoJSON();
var features_C19005_CUERPO_AGUA_INEGI_2022_3 = format_C19005_CUERPO_AGUA_INEGI_2022_3.readFeatures(json_C19005_CUERPO_AGUA_INEGI_2022_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_C19005_CUERPO_AGUA_INEGI_2022_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C19005_CUERPO_AGUA_INEGI_2022_3.addFeatures(features_C19005_CUERPO_AGUA_INEGI_2022_3);
var lyr_C19005_CUERPO_AGUA_INEGI_2022_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C19005_CUERPO_AGUA_INEGI_2022_3, 
                style: style_C19005_CUERPO_AGUA_INEGI_2022_3,
                popuplayertitle: 'C19005_CUERPO_AGUA_INEGI_2022',
                interactive: true,
                title: '<img src="styles/legend/C19005_CUERPO_AGUA_INEGI_2022_3.png" /> C19005_CUERPO_AGUA_INEGI_2022'
            });
var format_C19_COR__AGUA_INEGI_2022_4 = new ol.format.GeoJSON();
var features_C19_COR__AGUA_INEGI_2022_4 = format_C19_COR__AGUA_INEGI_2022_4.readFeatures(json_C19_COR__AGUA_INEGI_2022_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_C19_COR__AGUA_INEGI_2022_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C19_COR__AGUA_INEGI_2022_4.addFeatures(features_C19_COR__AGUA_INEGI_2022_4);
var lyr_C19_COR__AGUA_INEGI_2022_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C19_COR__AGUA_INEGI_2022_4, 
                style: style_C19_COR__AGUA_INEGI_2022_4,
                popuplayertitle: 'C19_COR__AGUA_INEGI_2022',
                interactive: true,
    title: 'C19_COR__AGUA_INEGI_2022<br />\
    <img src="styles/legend/C19_COR__AGUA_INEGI_2022_4_0.png" /> Intermitente<br />\
    <img src="styles/legend/C19_COR__AGUA_INEGI_2022_4_1.png" /> Perenne<br />' });
var group_LMITES = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'LÍMITES'});
var group_REDNACIONALDECAMINOS = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'RED NACIONAL DE CAMINOS'});
var group_CARTATOPOGRFICA = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'CARTA TOPOGRÁFICA'});
var group_POLIGONOSDEMARURT = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'POLIGONOS DEMARURT'});
var group_MARCOGEOESTADSTICO2020 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'MARCO GEOESTADÍSTICO 2020'});

lyr_GoogleSatellite_0.setVisible(true);lyr_C19005_Zonificacion_Primaria_FOA_2023_1.setVisible(true);lyr_C19005_Zonificacion_Secundaria_FOA_2023_2.setVisible(true);lyr_C19005_CUERPO_AGUA_INEGI_2022_3.setVisible(true);lyr_C19_COR__AGUA_INEGI_2022_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_C19005_Zonificacion_Primaria_FOA_2023_1,lyr_C19005_Zonificacion_Secundaria_FOA_2023_2,lyr_C19005_CUERPO_AGUA_INEGI_2022_3,lyr_C19_COR__AGUA_INEGI_2022_4];
lyr_C19005_Zonificacion_Primaria_FOA_2023_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'NOM_ENT': 'NOM_ENT', 'SUP_Ha': 'SUP_Ha', 'ZONIF_PRIM': 'ZONIF_PRIM', 'HORIZONTES': 'HORIZONTES', 'Uso_G': 'Uso_G', });
lyr_C19005_Zonificacion_Secundaria_FOA_2023_2.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOM_ENT': 'NOM_ENT', 'SUP_Ha': 'SUP_Ha', 'ZONIF_PRIM': 'ZONIF_PRIM', 'Uso_G': 'Uso_G', 'NOM_MUN': 'NOM_MUN', 'ZON_SEC_GR': 'ZON_SEC_GR', 'DESCRIPCIO': 'DESCRIPCIO', });
lyr_C19005_CUERPO_AGUA_INEGI_2022_3.set('fieldAliases', {'identifica': 'identifica', 'geografico': 'geografico', 'cali_repr': 'cali_repr', 'nombre': 'nombre', 'codigo': 'codigo', 'condicion': 'condicion', 'st_area_ge': 'st_area_ge', 'st_perimet': 'st_perimet', 'CVE_ENT': 'CVE_ENT', 'NOM_ENT': 'NOM_ENT', 'CVE_MUN': 'CVE_MUN', 'NOM_MUN': 'NOM_MUN', });
lyr_C19_COR__AGUA_INEGI_2022_4.set('fieldAliases', {'identifica': 'identifica', 'geografico': 'geografico', 'cali_repr': 'cali_repr', 'nombre': 'nombre', 'codigo': 'codigo', 'condicion': 'condicion', 'st_length_': 'st_length_', 'CVE_ENT': 'CVE_ENT', 'NOM_ENT': 'NOM_ENT', });
lyr_C19005_Zonificacion_Primaria_FOA_2023_1.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'NOM_ENT': 'TextEdit', 'SUP_Ha': 'TextEdit', 'ZONIF_PRIM': 'TextEdit', 'HORIZONTES': 'TextEdit', 'Uso_G': 'TextEdit', });
lyr_C19005_Zonificacion_Secundaria_FOA_2023_2.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOM_ENT': 'TextEdit', 'SUP_Ha': 'TextEdit', 'ZONIF_PRIM': 'TextEdit', 'Uso_G': 'TextEdit', 'NOM_MUN': 'TextEdit', 'ZON_SEC_GR': 'TextEdit', 'DESCRIPCIO': 'TextEdit', });
lyr_C19005_CUERPO_AGUA_INEGI_2022_3.set('fieldImages', {'identifica': 'TextEdit', 'geografico': 'TextEdit', 'cali_repr': 'TextEdit', 'nombre': 'TextEdit', 'codigo': 'TextEdit', 'condicion': 'TextEdit', 'st_area_ge': 'TextEdit', 'st_perimet': 'TextEdit', 'CVE_ENT': 'TextEdit', 'NOM_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', });
lyr_C19_COR__AGUA_INEGI_2022_4.set('fieldImages', {'identifica': 'TextEdit', 'geografico': 'TextEdit', 'cali_repr': 'TextEdit', 'nombre': 'TextEdit', 'codigo': 'TextEdit', 'condicion': 'TextEdit', 'st_length_': 'TextEdit', 'CVE_ENT': 'TextEdit', 'NOM_ENT': 'TextEdit', });
lyr_C19005_Zonificacion_Primaria_FOA_2023_1.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'NOM_ENT': 'no label', 'SUP_Ha': 'no label', 'ZONIF_PRIM': 'no label', 'HORIZONTES': 'no label', 'Uso_G': 'no label', });
lyr_C19005_Zonificacion_Secundaria_FOA_2023_2.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOM_ENT': 'no label', 'SUP_Ha': 'no label', 'ZONIF_PRIM': 'no label', 'Uso_G': 'no label', 'NOM_MUN': 'no label', 'ZON_SEC_GR': 'no label', 'DESCRIPCIO': 'no label', });
lyr_C19005_CUERPO_AGUA_INEGI_2022_3.set('fieldLabels', {'identifica': 'no label', 'geografico': 'no label', 'cali_repr': 'no label', 'nombre': 'no label', 'codigo': 'no label', 'condicion': 'no label', 'st_area_ge': 'no label', 'st_perimet': 'no label', 'CVE_ENT': 'no label', 'NOM_ENT': 'no label', 'CVE_MUN': 'no label', 'NOM_MUN': 'no label', });
lyr_C19_COR__AGUA_INEGI_2022_4.set('fieldLabels', {'identifica': 'no label', 'geografico': 'no label', 'cali_repr': 'no label', 'nombre': 'no label', 'codigo': 'no label', 'condicion': 'no label', 'st_length_': 'no label', 'CVE_ENT': 'no label', 'NOM_ENT': 'no label', });
lyr_C19_COR__AGUA_INEGI_2022_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});