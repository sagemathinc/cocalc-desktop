import { BrowserWindow, shell } from "electron";
import windowStateKeeper from "electron-window-state";
import type { State } from "electron-window-state";
import { join } from "path";

let windowState: State | undefined = undefined;

export function createWindow(isAdditional: boolean = false) {
  if (windowState == null) {
    windowState = windowStateKeeper({
      defaultWidth: 1000,
      defaultHeight: 800,
    });
  }
  const win = new BrowserWindow({
    show: false,
    width: isAdditional ? 1024 : windowState.width,
    height: isAdditional ? 768 : windowState.height,
    x: isAdditional ? Math.round(200 * Math.random()) : windowState.x,
    y: isAdditional ? Math.round(200 * Math.random()) : windowState.y,
    webPreferences: {
      preload: join(__dirname, "preload.js"),
    },
  });

  if (!isAdditional) {
    windowState.manage(win);
  }

  // See https://stackoverflow.com/questions/32402327/how-can-i-force-external-links-from-browser-window-to-open-in-a-default-browser
  // This ensures that clicking links that open another tab use the normal OS
  // browser, rather than trying to create a broken electron window.
  win.webContents.on("new-window", function (e, url) {
    e.preventDefault();
    shell.openExternal(url);
  });

  win.loadURL("https://cocalc.com");

  // See https://dev.to/vadimdemedes/making-electron-apps-feel-native-on-mac-52e8
  // though I don't think it really helps at all for us.  Waiting the 1s before
  // showing does seem to feel better though, so I'm leaving this.
  win.once("ready-to-show", () => {
    setTimeout(() => win.show(), 1000);
  });

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

  return win;
}
