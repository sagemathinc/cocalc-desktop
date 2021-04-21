# CoCalc Desktop

## What this is

This initial goal of cocalc-desktop is to provide a minimal easy-to-install version of CoCalc for MS Windows and MacOS (both M1 and x86) that addresses the following problems:

- **Keyboard shortcuts:** Provide a way of running CoCalc where browser keyboard shortcuts do not interfere at all with usability.  E.g, it should be possible to use Emacs in a terminal with standard keyboard shortcuts.
- **No extensions:** Browser extensions or other browser configuration can cause significant performance issues for CoCalc, and this desktop app provides a more well defined and predictable host for using CoCalc.

Initially, cocalc-desktop really does is provide a nice icon and embed the main site https://cocalc.com in a full-body iframe.  It's very similar to simply installing CoCalc as a minimal progressive web application.

## Other goals

There are many other longterm goals that we may also develop as part of this application.  However, for the first release, the above is our main motivation.

- **Local Jupyter Kernels:** More longterm, we could make any Jupyter kernel available on the local user's computer available for realtime collaborative use via CoCalc.  This is something that isn't possible in a web browser, but would be relatively straightforward to implement in a natural way as part of cocalc-docker.  This is related to [cocalc-compute](https://github.com/sagemathinc/cocalc-compute), and there are similar very significant security implications to using such functionality.
- **Features!** Look at the section headings [here](https://www.electronjs.org/docs) under "Adding features to your app".  Many of those could translate in a natural way to extra functionality that we could implement for cocalc-desktop.  E.g., native notifications, custom dock menu, native file drag &amp; drop, etc.
