// This is from https://www.npmjs.com/package/electron-context-menu
// It makes it so you see something when you right click.

import contextMenu from "electron-context-menu";
import { shell } from "electron";

const menu = contextMenu({
  prepend: (_defaultActions, parameters, _browserWindow) => [
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

export default menu;
