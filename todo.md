# Todo list for cocalc-desktop

## A minimal _**first**_ usable release

- [x] cut/paste/copy are missing!
- [x] Icon
- [x] Change Help menu to be about CoCalc (?)
- [x] Better initial app size
- [x]  "About cocalc" menu item pop-up dialog shouldn't be about Electron
- [x] Make it so quitting the application works on macOS.
- [x] make binaries for OS X and Windows
- [x] post on Github?

## After that

See [the issue tracker](https://github.com/sagemathinc/cocalc-desktop/issues).  Also:

- [ ] typescript
- [ ] sign applications: tedious and costs, but do this if we actually get _users_.
- [ ] is there a way so that "open a link in a new tab" in the iframe opens the default system-wide browser, instead of trying to make a new electronjs browser window? Probably, since `shell.openExternal` does exactly what we want...
- [ ] way to configure cocalc-desktop to use a different cocalc server (e.g., instead of [cocalc.com](http://cocalc.com), use a custom server).
- [ ] something very similar to this could be **very** useful on an iPad, so you get the website, but with a custom keyboard and other things.  That would likely use maybe React-native instead of Electron.js, but it's the same idea.  Basically, all the [weird issues](https://github.com/sagemathinc/cocalc/issues?q=is%3Aissue+is%3Aopen+ipad) on ipad are about weird systemwide shortcuts and funny Safari behavior...
