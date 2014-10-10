Advanced tips and tricks
========================
Well, its just more in depth stuff

### Force a reset of the dependency registry
Force clean dep registry:

1. edit `lib/smart.require` set it to `{}` *empty* and save
2. restore `lib/smart.require` with the deps you had in there and save

### Setting branch or tags
Setting git references specific you can.

You can set either a branch or tag *(if both is set only tag is used)*
```js
{
  "foo": {
    "git": "https://github.com/Foo/bar.git"
    "branch": "master",
    "tag": "v1.0.0",
    "recursive": false // default is true, true == load submodules
   }
}
```

> Note: "git" can be set to local folders too if developing locally. But you may have to force reset if referenced code has changed.

### Lazy loading modules
Not sure if its needed - but its added..
```js
  define('famous/core/Surface', function(Surface) {
    // This code will be called when all dependencies and their deps
    // are loaded and ready.
  });
```

### Define modules in client code
```js
  define('module', ['dep1', .. , 'depn'], function(require, exports, module) {
    // Using require in here will throw an error if the dependencies are not
    // ready / defined...
  });
```
*In library code its parsed*

### Package creator?
You can create a repo and have the user add it to the project just like the `Famo.us` packages.

Something like: *(foo.js)*
```js
  // Famono will parse the module for dependencies and transform this before
  // its sent to the client.
  define(function(require, exports, module) {
    // Some code...
    module.exports = 'bar';
  });
```

### Controlling verbosity
Famono will always try to warn the user about libraries not found or overwriting globals etc. for easier debugging.

This may not be what you want as a package developer why we've added some Famono annotations:
```js
  // @famono ignore
  var famous = {}; // Famono will skip overwrite warning

  // @famono silent
  // All warnings below is hidden for the current file
```