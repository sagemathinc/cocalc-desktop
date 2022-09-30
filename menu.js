const { app, Menu, shell } = require("electron");
const { createWindow } = require("./window");
const { aboutWindow } = require("./about");
const isMac = process.platform === "darwin";

const template = [
  ...(isMac
    ? [
        {
          label: app.name,
          submenu: [
            {
              label: "About " + app.name,
              click: aboutWindow,
            },
            { type: "separator" },
            { role: "services" },
            { type: "separator" },
            { role: "hide" },
            { role: "hideothers" },
            { role: "unhide" },
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
        click: () => createWindow(true),
      },
    ],
  },
  {
    label: "Edit",
    submenu: [
      { role: "undo" },
      { role: "redo" },
      { type: "separator" },
      { role: "cut" },
      { role: "copy" },
      { role: "paste" },
      { role: "delete" },
      { role: "selectAll" },
      /*{ type: "separator" },
      {
        label: "Find",
        click: async () => {
          win = BrowserWindow.getAllWindows()[0];
          const contents = win.webContents;
          const findInPage = new FindInPage(contents);
          findInPage.openFindWindow();
        },
      },*/
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
      { label: "About", click: aboutWindow },
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
