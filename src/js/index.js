import Fx from './scroll-fx.js'
import Maps from './maps.js'

// initialize scrolling effects
(new Fx({
    spotlight: 'spotlights',
    nav: 'nav'
})).mount(window);

// initialize google maps
window.initMap = () => new Maps({
    el: 'map',
    center: {lat: 30.8357582, lng: -83.9814574},
    marker: {
        position: {lat: 30.835711, lng: -83.981562},
        title: 'Thomasville Amphitheatre'
    },
    zoom: 19
});

if (window.mapInitialized) {
    window.initMap();
}
