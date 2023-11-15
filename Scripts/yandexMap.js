async function initMap() {
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker} = ymaps3;

    const map = new YMap(
        document.getElementById('map'),
        {
            location: {
                center: [36.61986834792114,55.89836380661811],
                zoom: 7
            }
        }
    );


    const markerElement = document.getElementById("mapMarker");

    const marker = new YMapMarker(
        {
            coordinates: [37.41986834792114,56.29836380661811],
        },
        markerElement
    );

    map.addChild(new YMapDefaultSchemeLayer());
    map.addChild(new YMapDefaultFeaturesLayer());
    map.addChild(marker);
}

initMap().then();