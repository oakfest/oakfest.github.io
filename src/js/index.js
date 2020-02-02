import '../css/main.scss'

import Fx from './scroll-fx.js'
import Maps from './maps.js'
import Tracker from './tracking.js'

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

// initialize tracker
const tracker = new Tracker();
window.oak = {
    tracker: tracker,
    track: tracker.track
};

const count = document.getElementById('countdown');
count.style.display = 'block';

if (count) {
    const daysEl = document.getElementById('count-days');
    const hoursEl = document.getElementById('count-hours');
    const minutesEl = document.getElementById('count-minutes');
    const secondsEl = document.getElementById('count-seconds');
    const endDate = new Date('March 14, 2020 15:30:00 EST');

    const updateCounter = () => {
        const diff = endDate - Date.now();
        const days = Math.floor(diff / (24*3600*1000));
        const hours = Math.floor((diff - (days * (24*3600*1000))) / (3600*1000));
        const minutes = Math.floor((diff - (hours * (3600*1000)) - (days * (24*3600*1000))) / (60*1000));
        const seconds = Math.floor((diff - (hours * (3600*1000)) - (days * (24*3600*1000)) - (minutes * (60*1000))) / (1000));

        daysEl.innerText = days + "";
        hoursEl.innerText = hours + "";
        minutesEl.innerText = minutes + "";
        secondsEl.innerText = seconds + "";
    };

    updateCounter();

    setInterval(updateCounter, 1000);
}