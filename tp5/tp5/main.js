// main.js
let map;
const originalMapCenter = [51.505, -0.09];

function initializeMap() {
    map = L.map('map').setView(originalMapCenter, 3);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    map.getContainer().addEventListener('drop', function (event) {
        event.preventDefault();
        var buttonText = event.dataTransfer.getData('text');
        switch (buttonText) {
            case 'France':
                navigateToLocation([48.8566, 2.3522]);
                break;
            case 'Italy':
                navigateToLocation([41.9028, 12.4964]);
                break;
            case 'England':
                navigateToLocation([51.5099, -0.1180]);
                break;
            case 'Japan':
                navigateToLocation([35.682839, 139.759455]);
                break;
            case 'Belgium':
                navigateToLocation([50.8503, 4.3517]);
                break;
        }
    });

    map.getContainer().addEventListener('dragover', function (event) {
        event.preventDefault();
    });
}

function navigateToLocation(location) {
    if (!map) {
        initializeMap();
    }
    map.setView(location, 13);
}

function resetMap() {
    if (map) {
        map.setView(originalMapCenter, 3);
    }
}

function dragStart(event) {
    event.dataTransfer.setData('text', event.target.textContent);
}

initializeMap();
