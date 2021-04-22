const { app, Menu, shell } = require("electron");
const { createWindow } = require("./window");

const isMac = process.platform === "darwin";

const template = [
  ...(isMac
    ? [
        {
          label: app.name,
          submenu: [
            { role: "about" },
            { type: "separator" },
            { role: "services" },
            { type: "separator" },
            { role: "hide" },
            { role: "hideothers" },
            { role: "unhide" },
            { type: "separator" },
            { role: "quit" },
          ],
        },
      ]
    : []),
  {
    label: "File",
    submenu: [
      {
        label: "New Window",
        click: createWindow,
      },
      isMac ? { role: "close" } : { role: "quit" },
    ],
  },
  {
    label: "View",
    submenu: [
      { role: "reload" },
      { role: "forceReload" },
      { role: "toggleDevTools" },
      { type: "separator" },
      { role: "togglefullscreen" },
    ],
  },
  {
    label: "Window",
    submenu: [
      { role: "minimize" },
      { role: "zoom" },
      ...(isMac
        ? [
            { type: "separator" },
            { role: "front" },
            { type: "separator" },
            { role: "window" },
          ]
        : [{ role: "close" }]),
    ],
  },
  {
    role: "help",
    submenu: [
      {
        label: "Documentation",
        click: async () => {
          await shell.openExternal("https://doc.cocalc.com");
        },
      },
      {
        label: "Community Discussions",
        click: async () => {
          await shell.openExternal("https://discord.gg/nEHs2GK");
        },
      },
      {
        label: "Search Issues",
        click: async () => {
          await shell.openExternal(
            "https://github.com/sagemathinc/cocalc/issues"
          );
        },
      },
    ],
  },
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
