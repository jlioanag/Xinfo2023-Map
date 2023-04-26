$(function() {
    let map = L.map('map').setView([4.038, 21.758], 3);

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

    let currDisplayed = "none";
    let currDisplayedObj = null;
    
    L.geoJson(africa, {style: style}).addTo(map);

    let imageOverlayCoords = [[-34.83333333333334, -17.583333333333343], [37.583333333333336, 63.5]];
    let imageOverlayOptions = {opacity: 0.5};

    let getImageOverlay = (imageName) => {
        return L.imageOverlay("/images/" + imageName + ".png", imageOverlayCoords, imageOverlayOptions);
    }

    let images = {
        "birch_label": getImageOverlay("birch_label"),
        "conflict_intensity": getImageOverlay("conflict_intensity"),
        "corruption_perception_index": getImageOverlay("corruption_perception_index"),
        "gaussian_label": getImageOverlay("gaussian_label"),
        "kmeans_label": getImageOverlay("kmeans_label"),
        "population": getImageOverlay("population"),
        "solar": getImageOverlay("solar"),
        "wind_speed": getImageOverlay("wind_speed"),
    }

    let disasterLayer = []

    let hurricaneLayer = []

    disasters.forEach((dis) => {
        disasterLayer.push(L.marker([dis['lat'], dis['lon']]).bindPopup(dis['info']));
    });

    hurricanes.forEach((hur) => {
        hurricaneLayer.push(L.polyline(hur['path'], {color: 'orange'}));
    });

    let disasterLayerGroup = L.layerGroup(disasterLayer);
    let hurricaneLayerGroup = L.layerGroup(hurricaneLayer);

    $('.form-check-input').change(function() {
        if (this.checked && this.value !== currDisplayed) {
            
            console.log(this.value)
            if (currDisplayedObj) {
                currDisplayedObj.remove();
            }
            if (this.value in images) {
                console.log("test")
                images[this.value].addTo(map);
                currDisplayedObj = images[this.value];
                $("#colorbar").attr("src", "/images/" + this.value + "_colorbar.png");
                $("#colorbar").css("display", "block");
            } else {
                $("#colorbar").css("display", "none");
            }
            currDisplayed = this.value;
        }
    });

    $('.form-check-input-box').change(function() {
        console.log(this.checked)
        if (this.checked) {
            if (this.value === "hurricanes") {
                hurricaneLayerGroup.addTo(map);
            } else if(this.value === "disasters") {
                disasterLayerGroup.addTo(map);
            }
        } else {
            if (this.value === "hurricanes") {
                hurricaneLayerGroup.remove();
            } else if(this.value === "disasters") {
                disasterLayerGroup.remove();
            }
        }
    });
});