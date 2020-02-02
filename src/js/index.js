import '../css/main.scss'

import Tracker from './tracking.js'
import countdown from "./countdown";

// initialize tracker
const tracker = new Tracker();
window.oak = {
    tracker: tracker,
    track: tracker.track
};

// initialize countdown
countdown(
    new Date('March 14, 2020 15:30:00 EST'),
    'countdown',
    'count-days',
    'count-hours',
    'count-minutes',
    'count-seconds'
);