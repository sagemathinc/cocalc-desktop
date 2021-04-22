const openAboutWindow = require("about-window").default;
const { join } = require("path");
const { app } = require("electron");

function aboutWindow() {
  openAboutWindow({
    icon_path: join(__dirname, "build/icon.png"),
    copyright: "Copyright (c) 2021 SageMath, Inc.",
    package_json_dir: __dirname,
    /* open_devtools: process.env.NODE_ENV !== 'production', */
  });
}

exports.aboutWindow = aboutWindow;
