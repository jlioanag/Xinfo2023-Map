
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