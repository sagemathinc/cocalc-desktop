// This is from https://www.npmjs.com/package/electron-context-menu
// It makes it so you see something when you right click.

const contextMenu = require("electron-context-menu");
const { shell } = require("electron");

exports.default = contextMenu({
  prepend: (defaultActions, parameters, browserWindow) => [
    {
      label: "Search Google for “{selection}”",
      // Only show it when right-clicking text
      visible: parameters.selectionText.trim().length > 0,
      click: () => {
        shell.openExternal(
          `https://google.com/search?q=${encodeURIComponent(
            parameters.selectionText
          )}`
        );
      },
    },
  ],
});
