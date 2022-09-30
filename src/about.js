const openAboutWindow = require("about-window").default;
const { app } = require("electron");

function aboutWindow() {
  openAboutWindow({
    product_name: "CoCalc",
    homepage: "https://cocalc.com",
    icon_path: "https://storage.googleapis.com/cocalc-extra/cocalc-logo.svg",
    license: "AGPL+common clause",
    copyright: "Copyright (c) 2021 SageMath, Inc.",
    package_json_dir: __dirname,
    use_version_info: false,
    /* open_devtools: process.env.NODE_ENV !== 'production', */
  });
}

exports.aboutWindow = aboutWindow;
