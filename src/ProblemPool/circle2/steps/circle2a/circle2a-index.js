import {hints as defaultPathway} from './tutoring/circle2aDefaultPathway.js';
import {preferredPathway} from './../../../problemConfig.js';

var hints;

if (preferredPathway === "defaultPathway") {
    hints = defaultPathway;
}

export default hints;