import { app, BrowserWindow } from "electron";
import { createWindow } from "./window";
import "./context-menu";
import "./menu";

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  app.quit();
});

