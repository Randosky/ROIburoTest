async function initMap() {
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer} = ymaps3;

    const map = new YMap(
        document.getElementById('map'),
        {
            location: {
                center: [37.62209300000001, 55.75554289958026],
                zoom: 7
            }
        }
    );

    map.addChild(new YMapDefaultSchemeLayer());
}

initMap().then();