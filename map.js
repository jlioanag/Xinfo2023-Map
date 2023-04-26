
var map = L.map('map').setView([4.038, 21.758], 3);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 3,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function style(feature) {
    return {
        fillColor: 'transparent',
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '7',
        fillOpacity: 0.7
    };
}

L.geoJson(africa, {style: style}).addTo(map);

let countriesLayer = L.geoJson(africa).addTo(map);

let layerDict = {};

console.log(countriesLayer);

// Earthquakes and tsunami markers
disasters.forEach((dis) => {
    L.marker([dis['lat'], dis['lon']]).addTo(map).bindPopup(dis['info']);
});

// Hurricane polylines
hurricanes.forEach((hur) => {
    L.polyline(hur['path'], {color: 'orange'}).addTo(map);
});

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
        let layerCountryCode = layer.feature.properties.iso_a3;
        if (layer.feature.properties.iso_a3 == "-99") {
            layerCountryCode = layer.feature.properties.sov_a3;
        }
        
        let saturation = 0
        if (layerCountryCode in countryData) {
            saturation = countryData[layerCountryCode];
        }
        saturation = Math.random() * 100;
        layer.setStyle({
            stroke: false,
            fillColor: "hsl(" + hue + ", " + saturation + "%, 50%)"
        });
    })
}

highlightSelectedCountries({}, 0)
