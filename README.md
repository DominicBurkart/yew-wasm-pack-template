This template sets you up with a full-stack Rust application, with an
[Actix](https://actix.rs) backend and a [Yew](https://yew.rs) frontend. It
is a fork of the
[yew webpack starter](https://github.com/yewstack/yew-wasm-pack-minimal), and
uses [workbox](https://developers.google.com/web/tools/workbox)
to set up a service worker configuration.

When you've downloaded the repo, and assuming that you have
[cargo](https://www.rust-lang.org/tools/install), [pip](https://pip.pypa.io/en/stable/installing/), and [yarn](https://classic.yarnpkg.com/docs/install) installed, all you need to do to set it up is to run
the dev install and build scripts:
```sh
sh dev_install.sh
sh build.sh
```

This will:
- update rustup
- download clippy and rustfmt if they aren't on your system
- download precommit
- set the precommit hooks defined in `.pre-commit-config.yaml`
- compile the web application
- compile the server application
- run the server application

When the output of `build.sh` says that the server
is running, you can access it at localhost:8088 (set in `api/src/main.rs`).
