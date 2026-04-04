"use strict";
class Logger {
    constructor(levels) {
        /*   console.log( Levels['INFO']) */
    }
    static log(level, message) {
        console.log(level, message);
        // ho capito ma come faccio a verificare che esso sia parte dei livelli consentiti? 
    }
}
var Levels;
(function (Levels) {
    Levels[Levels["INFO"] = 0] = "INFO";
    Levels[Levels["WARNING"] = 1] = "WARNING";
    Levels[Levels["ERROR"] = 2] = "ERROR";
})(Levels || (Levels = {}));
Logger.log(Levels['INFOf'], "CIAO"); // cosa succede se non è un levels?
let colorName = Levels['INFO'];
/* console.log(colorName) */
function logLevel(level) {
    console.log(level);
}
