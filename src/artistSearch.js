import {cleanSentence} from './inputSanitizer.js';
import {seatGeakRequestHandler} from './seatGeakRequestHandler.js';

let getQueryStringForEventsByPerformer = function(queryValue, eventsHolder) {
    return seatGeakRequestHandler(cleanSentence(queryValue, eventsHolder));
  }

export {getQueryStringForEventsByPerformer}

