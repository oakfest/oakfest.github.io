
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
    center: {lat: 30.8357561, lng: -83.9803326},
    marker: {
        position: {lat: 30.835711, lng: -83.981562},
        title: 'Thomasville Amphitheatre'
    },
    zoom: 19
});
