"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
var mainWindows;
function createWindows() {
    mainWindows = new electron_1.BrowserWindow({
        height: 600,
        width: 900
    });
    mainWindows.loadFile(path.join(__dirname, "../index.html"));
    mainWindows.on("closed", function () {
        mainWindows = null;
    });
}
electron_1.app.on("ready", createWindows);
electron_1.app.on("window-all-closed", function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
electron_1.app.on("activate", function () {
    // On OS X it"s common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindows === null) {
        createWindows();
    }
});
//# sourceMappingURL=main.js.map