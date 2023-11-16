async function initMap() {
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker} = ymaps3;

    const map = new YMap(
        document.getElementById('map'),
        {
            location: {
                center: [37.620894937726725,55.75661494827485],
                zoom: 7
            }
        }
    );


    const markerElement = document.getElementById("mapMarker");

    const marker = new YMapMarker(
        {
            coordinates: [37.620894937726725,55.75661494827485],
        },
        markerElement
    );

    map.addChild(new YMapDefaultSchemeLayer());
    map.addChild(new YMapDefaultFeaturesLayer());
    map.addChild(marker);
}

initMap().then();