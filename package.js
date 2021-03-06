Package.describe({
  name: 'raix:famono',
  version: '0.9.27',
  summary: 'Library bundler supports use of libraries like Famous, via git/bower and requireJS/commonJS/AMD/UMD',
  git: 'https://github.com/raix/Meteor-famono.git'
});

// Package.registerBuildPlugin
// _transitional_registerBuildPlugin
Package.registerBuildPlugin({
  name: 'compileRequirejs',
  use: [ 'underscore' ],
  sources: [
    'famono_lib.js', /* The old famono npm package */
    'compile_requirejs.js' // The holy grail!!
  ],
  npmDependencies: {
    'sync-exec': '0.3.2', // exec sync - we could also just run in a fiber?
    // My sweet non binary chokidar :)
    'chokidar': 'https://github.com/raix/chokidar/tarball/53bdc584bcabb8a132be7292026c95888554aca4' // For watching local files.. 0.8.2
  }
});

/* included binaries */
Npm.depends({
  send: '0.1.4', // Serving library files async / lazyloading
  useragent: "2.0.7", // Ment for client specific bundles?
});

Package.onUse(function(api) {

  api.versionsFrom('1.0');

  api.use('webapp', 'server');  // Used for serving files
  api.use(['reload', 'underscore'], 'client'); // Not sure if we are using this?
  api.use('routepolicy', 'server'); // Not sure if this is used...

  api.addFiles([
    // Just noop server-side api warning if used on server
    'requirejs_server.js',
    // The library lazyloading server
    'requirejs_libraries_server.js'
  ], 'server');

  // This is browser client side require / define api
  api.addFiles('requirejs_client.js', 'client');

  api.export('Famono');
});
