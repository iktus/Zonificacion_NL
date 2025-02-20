var size = 0;
var placement = 'point';
function categories_C19_COR__AGUA_INEGI_2022_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'INTERMITENTE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(145,220,242,1.0)', lineDash: [3.04,1.52], lineCap: 'square', lineJoin: 'bevel', width: 0.76}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PERENNE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(54,196,242,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.95}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_C19_COR__AGUA_INEGI_2022_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("condicion");
    var labelFont = "6.5px \'Corbel\', sans-serif";
    var labelFill = "#00bef2";
    var bufferColor = "#ffffff";
    var bufferWidth = 0.2;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (feature.get("nombre") !== null) {
        labelText = String(feature.get("nombre"));
    }
    
    var style = categories_C19_COR__AGUA_INEGI_2022_4(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
