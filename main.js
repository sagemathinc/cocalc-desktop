const { app, BrowserWindow } = require("electron");
const { createWindow, closeMainWindow } = require("./window");

const disposeContextMenu = require("./context-menu");

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  disposeContextMenu();
  app.quit();
});

require("./menu");
