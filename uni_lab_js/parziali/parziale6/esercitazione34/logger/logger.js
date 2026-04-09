"use strict";
class UnknownLevel extends Error {
}
class Logger {
    static log(level, message) {
        if (Levels[level] == undefined)
            throw new UnknownLevel();
        console.log(typeof Levels[level]);
        console.log(Levels[level], message);
    }
}
var Levels;
(function (Levels) {
    Levels[Levels["INFO"] = 0] = "INFO";
    Levels[Levels["WARNING"] = 1] = "WARNING";
    Levels[Levels["ERROR"] = 2] = "ERROR";
})(Levels || (Levels = {}));
let log = new Logger();
Logger.log(0, "CIAO");
let colorName = Levels['INFO'];
/* console.log(colorName) */
function logLevel(level) {
    console.log(level);
}
