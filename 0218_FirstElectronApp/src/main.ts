import { app, BrowserWindow } from "electron";
import * as path from "path";

let mainWindows : Electron.BrowserWindow;

function createWindows() {
    mainWindows =  new BrowserWindow({
        height : 600,
        width : 900,
    });

    mainWindows.loadFile(path.join(__dirname, "../index.html"));

    mainWindows.on("closed", ()=>{
        mainWindows = null;
    });
}

app.on("ready", createWindows);

app.on("window-all-closed", () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== "darwin") {
      app.quit();
    }
  });

  app.on("activate", () => {
    // On OS X it"s common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindows === null) {
        createWindows();
    }
  });