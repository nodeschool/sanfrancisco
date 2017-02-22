# NodeSchool SF

Welcome to the NodeSchool San Francisco chapter's repository. We use this
repository for our website and almost all our communication.

You can see the website here: http://nodeschool.io/sanfrancisco/


## Talk to us

We utilize [GitHub Issues](https://github.com/nodeschool/sanfrancisco/issues)
like a message board and keep almost all of our communication in the open. If
for any reason you need to contact an organizer privately you may contact us
directly.


## Team

 - Lydia Kats, [Twitter](https://twitter.com/llkats/)
 - Reza Akhavan, [GitHub](https://github.com/jedireza/),
   [Twitter](https://twitter.com/jedireza/), [Email](mailto:jedireza@gmail.com)


## Contributing to the website

The website is static HTML, CSS and JavaScript. It runs on [GitHub
Pages](https://pages.github.com/).

### Running locally

When you're editing the website it's convenient to run the website locally to
see your changes.

Make sure you install dependencies via:

```bash
$ npm install
```

Then you can run the website via:

```bash
$ npm start

[08:25:04] Using gulpfile ~/Sites/sanfrancisco/gulpfile.js
[08:25:04] Starting 'hbs:compile'...
[08:25:04] Starting 'watch'...
[08:25:04] Finished 'watch' after 7.45 ms
[08:25:04] Starting 'browser-sync'...
[08:25:04] Finished 'browser-sync' after 14 ms
[08:25:04] Finished 'hbs:compile' after 65 ms
[08:25:04] Starting 'default'...
[08:25:04] Finished 'default' after 6.21 μs
[BS] Access URLs:
 --------------------------------------
       Local: http://localhost:3000
    External: http://192.168.43.82:3000
 --------------------------------------
          UI: http://localhost:3001
 UI External: http://192.168.43.82:3001
 --------------------------------------
[BS] Serving files from: ./dist
```

Your default browser will automatically open and will auto-reload for any change.

By default it will start the server on port `3000`. If you want to specify a
different port use:

```bash
$ PORT=3000 npm start
```

Where `3000` is any port you choose.

### Performing a build

If you just need to build the application for prodution you can use `npm run build`. This will compile handlebars templates and move them in the `dist` folder.

## Special thanks

Andrew Duquet [created the first
issue](https://github.com/nodeschool/organizers/issues/92) that got the San
Francisco chapter started. Thank you Andrew!!
