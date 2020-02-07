import '../css/main.scss'

import Tracker from './tracking'
import countdown from "./countdown";
import data from '../../data'

// initialize tracker
const tracker = new Tracker();
window.oak = {
    tracker: tracker,
    track: tracker.track
};

// initialize countdown
countdown(
    new Date(data.iso.start),
    'countdown',
    'count-days',
    'count-hours',
    'count-minutes',
    'count-seconds'
);