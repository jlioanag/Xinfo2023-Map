
var map = L.map('map').setView([4.038, 21.758], 3);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 3,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function style(feature) {
    return {
        fillColor: 'transparent',
        weight: 1,
        opacity: 1,
        color: 'black',
        dashArray: '7',
        fillOpacity: 0.7
    };
}

var imageOverlay

L.geoJson(africa, {style: style}).addTo(map);

let countriesLayer = L.geoJson(africa).addTo(map);

let layerDict = {};

console.log(countriesLayer);

// -34.83333333333334 37.583333333333336 -17.583333333333343 63.5
// L.imageOverlay("/output.png", [[-90, -180], [90, 180]], {opacity: 0.5}).addTo(map);
// L.imageOverlay("/output.png", [[-35, -18], [38, 64]], {opacity: 0.5}).addTo(map);
L.imageOverlay("/output.png", [[-34.83333333333334, -17.583333333333343], [37.583333333333336, 63.5]], {opacity: 0.5}).addTo(map);

// Earthquakes and tsunami markers
// disasters.forEach((dis) => {
//     L.marker([dis['lat'], dis['lon']]).addTo(map).bindPopup(dis['info']);
// });

// Hurricane polylines
// hurricanes.forEach((hur) => {
//     L.polyline(hur['path'], {color: 'orange'}).addTo(map);
// });

countriesLayer.eachLayer((layer) => {
    let layerID = countriesLayer.getLayerId(layer);
    if (layer.feature.properties.iso_a3 == "-99") {
        layerDict[layer.feature.properties.sov_a3] = layerID;
        // layerDict[layer.feature]
    } else {
        layerDict[layer.feature.properties.iso_a3] = layerID;
    }


    layer.setStyle({
        // color: "#FFFFFF",
        stroke: false,
        // fillColor: "#000000"
        fillColor: "hsl(250, 0%, 50%)"
    })
});

let colorToHue = {
    "red": 0,
    "green": 100,
    "blue": 240,
    "pink": 300,
    "yellow": 60,
    "purple": 280
}

let highlightSelectedCountries = (countryData, hue) => {
    countriesLayer.eachLayer((layer) => {
        let layerCountryCode = layer.feature.properties.name;
        
        let saturation = 0
        if (layerCountryCode in countryData) {
            saturation = countryData[layerCountryCode];
        }
        layer.setStyle({
            stroke: false,
            fillColor: "hsl(" + hue + ", " + (saturation * 100) + "%, 50%)"
        });
    })
}

highlightSelectedCountries(conflictData, 0)
