const { BrowserWindow } = require("electron");
const path = require("path");

function createWindow(isAdditional) {
  const win = new BrowserWindow({
    useContentSize: true,
    width: 1024,
    height: 768,
    x: isAdditional ? Math.round(200 * Math.random()) : undefined,
    y: isAdditional ? Math.round(200 * Math.random()) : undefined,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");

  // If the user has selected "Confirm: always ask for confirmation
  // before closing the browser window" in their CoCalc account
  // prefs, then trying to close any window in cocalc-desktop will
  // fail, which is pretty annoying.  The motivation for "Confirm:
  // always ask ..." is that control/command+w closes a window in
  // your web browser, which is way too easily to accidentally do
  // when typing in a cocalc terminal. Fortunately, with an electron
  // app, we have total control and don't have the control/command+w
  // keyboard shortcut, so this feature isn't necessary.
  win.on("close", () => {
    win.destroy();
  });
}

exports.createWindow = createWindow;
