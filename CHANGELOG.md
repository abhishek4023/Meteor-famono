# Changelog

## vCurrent
## [v0.9.25] (https://github.com/raix/Meteor-famono/tree/v0.9.25)
#### 22/12/14 by Morten Henriksen
- set underscore version

- Add change log

- 0.9.25 - Adding isopack support - wip

- fix [#96](https://github.com/raix/Meteor-famono/issues/96)- First step of adding general isopack support

- Revert "Bump to version 0.9.25.2"

- Bump to version 0.9.25.2

- mbr update, remove versions.json

- mbr update versions and fix warnings

## [v0.9.24-pre.2] (https://github.com/raix/Meteor-famono/tree/v0.9.24-pre.2)
#### 16/12/14 by Morten Henriksen
- Bump the repo version

- make sure exports and module are undefined

- allow defines to return export object

- fix typo

- deprecate old package style

- fixed issue 90

- add notes on bower support

- Revert "Support smaller libraries"

- *Fixed bug:* "Could not find the global reference "famous"" [#88](https://github.com/raix/Meteor-famono/issues/88)

- Support smaller libraries

- workaround source reload for now

- clean up chokidar listeners

- add more of the package.js api

- Improve the watcher refresh for local libraries

- lower the initial threshold for fs events

- remove unused vars

- Bump to 0.9.19

- bump the library build

- Add support for define(obj) - (rare usage?)

- workaround initial file watcher events "path"/dev

- better view of whats included #85

- *Merged pull-request:* "Add git URL..." [#83](https://github.com/raix/Meteor-famono/issues/83) ([dandv](https://github.com/dandv))

- Add git URL...

- *Fixed bug:* "'Famono: library "famous/core/Surface" not defined' when importing a git repo that relies on Surface" [#82](https://github.com/raix/Meteor-famono/issues/82)

- famous-views up and running

- serve require, exports and module to anonymous def

- Add debug stuff

- *Fixed bug:* "Support packages that api.use("raix:famono@0.9.12")" [#81](https://github.com/raix/Meteor-famono/issues/81)

- *Fixed bug:* "when setting "root" deps should be fixed removing the root" [#78](https://github.com/raix/Meteor-famono/issues/78)

- *Fixed bug:* "Support packages that api.use("raix:famono@0.9.12")" [#81](https://github.com/raix/Meteor-famono/issues/81)

- Remove binary deps and bump 0.9.12

- Move binaries back

- add dev package to the scan

- add comment on PACKAGE_DIRS

- remove console.log

- *Merged pull-request:* "Support Meteor 0.9 compiled unipackages" [#74](https://github.com/raix/Meteor-famono/issues/74) ([gadicc](https://github.com/gadicc))

- *Fixed bug:* "cordova / famono" [#70](https://github.com/raix/Meteor-famono/issues/70)

- new version of famous allows us to define it asap

- famous v3 is mounted in sub folder "src"

- update readme to famous>=3 and meteor>=0.9.0

- move some of the doc to advanced.md

- bump version + add version deps

- define globals in meteor startup for now...

- use official repo

Patches by GitHub users [@dandv](https://github.com/dandv), [@gadicc](https://github.com/gadicc).

## [v0.8.0] (https://github.com/raix/Meteor-famono/tree/v0.8.0)
#### 31/08/14 by Morten Henriksen
- support raix:famono

## [v0.7.5] (https://github.com/raix/Meteor-famono/tree/v0.7.5)
#### 28/08/14 by Morten Henriksen
- Bump to version 0.7.4

## [v0.7.4] (https://github.com/raix/Meteor-famono/tree/v0.7.4)
#### 28/08/14 by Morten Henriksen
- bump for arch version @gadicc

## [v0.7.3] (https://github.com/raix/Meteor-famono/tree/v0.7.3)
#### 10/08/14 by Morten Henriksen
- Revert changes to please Meteor 0.9.0

- add versions on deps

## [v0.7.2] (https://github.com/raix/Meteor-famono/tree/v0.7.2)
#### 07/08/14 by Morten Henriksen
- try to please meteor

## [v0.7.1] (https://github.com/raix/Meteor-famono/tree/v0.7.1)
#### 07/08/14 by Morten Henriksen
- check if we are in a meteor folder if not exit

## [v0.7.0] (https://github.com/raix/Meteor-famono/tree/v0.7.0)
#### 07/08/14 by Morten Henriksen
- make it work with 0.9.0-rc4

## [v0.6.9] (https://github.com/raix/Meteor-famono/tree/v0.6.9)
#### 03/08/14 by Morten Henriksen
- comment debug info

- smart.require creation set inWatcherReload false

- oldconfig parsed should be an object

- move watcher globals to beginning

- improve require check

- change initial watch mode

- improve bower config load

- allow require(deps, f);

- Fix warning, namespace not defined

- update colors on errors/warnings

## [v0.6.8] (https://github.com/raix/Meteor-famono/tree/v0.6.8)
#### 02/08/14 by Morten Henriksen
## [v0.6.7] (https://github.com/raix/Meteor-famono/tree/v0.6.7)
#### 02/08/14 by Morten Henriksen
- more fine-grained change testers

- minor clean ups

- in watcher is triggered by event

- fix changes from cleanup

## [v0.6.6] (https://github.com/raix/Meteor-famono/tree/v0.6.6)
#### 02/08/14 by Morten Henriksen
- don't pretty print the global skeleton

- ensure load order in global init

- clean up parser find require

## [v0.6.5] (https://github.com/raix/Meteor-famono/tree/v0.6.5)
#### 02/08/14 by Morten Henriksen
- add recursive and note about watch

## [v0.6.4] (https://github.com/raix/Meteor-famono/tree/v0.6.4)
#### 02/08/14 by Morten Henriksen
- Have to observe changes on supported arguments too

- Default to raix/famous#famono

## [v0.6.3] (https://github.com/raix/Meteor-famono/tree/v0.6.3)
#### 01/08/14 by Morten Henriksen
- *Fixed bug:* "sharing modules between server and client code" [#58](https://github.com/raix/Meteor-famono/issues/58)

## [v0.6.2] (https://github.com/raix/Meteor-famono/tree/v0.6.2)
#### 01/08/14 by Morten Henriksen
- make watching default for local libs

- make central function for watch status

- Fragment ways of updating libs

## [v0.6.1] (https://github.com/raix/Meteor-famono/tree/v0.6.1)
#### 01/08/14 by Morten Henriksen
- improve check for index loads

## [v0.6.0] (https://github.com/raix/Meteor-famono/tree/v0.6.0)
#### 01/08/14 by Morten Henriksen
- Make sure not to watch files in the app folder

- trigger watcher api

- Rig watcher functionallity

- improve verbal output

- Add source fetcher for path

- fix module name check

- add chokidar dependency

## [v0.5.2] (https://github.com/raix/Meteor-famono/tree/v0.5.2)
#### 31/07/14 by Morten Henriksen
- *Merged pull-request:* "Some packages use {weak:true} as the second param" [#61](https://github.com/raix/Meteor-famono/issues/61) ([andrewreedy](https://github.com/andrewreedy))

Patches by GitHub user [@andrewreedy](https://github.com/andrewreedy).

## [v0.5.1] (https://github.com/raix/Meteor-famono/tree/v0.5.1)
#### 31/07/14 by Morten Henriksen
- Prepare the path sourceFetcher WIP

- Add the alias sourceFetcher

- Add the http source fetcher

- Remove sourceFetchers and refactor

- prepare for sourceFetchers pattern

- don't parse library defines - yet

- Rewrite the define match

- add greatGrandfather :)

- fix check for module name

- Remove warnings if in app module registry

- introduce the app module registry

- Have arrays queue up in a single string

- Make the code parser aware of arrays

- Add array parser

- Some packages use {weak:true} as the second param

- improve warning system

## [v0.5.0] (https://github.com/raix/Meteor-famono/tree/v0.5.0)
#### 30/07/14 by Morten Henriksen
- Famono.scope to use _parseDefineArguments

## [v0.4.9] (https://github.com/raix/Meteor-famono/tree/v0.4.9)
#### 29/07/14 by Morten Henriksen
- allow null as module name for anonymous modules

## [v0.4.8] (https://github.com/raix/Meteor-famono/tree/v0.4.8)
#### 29/07/14 by Morten Henriksen
- fix spelling

## [v0.4.7] (https://github.com/raix/Meteor-famono/tree/v0.4.7)
#### 29/07/14 by Morten Henriksen
- make debugging easier

- Make famous happy even if module load failes

- prefix warning Famono

- Make loading safer

## [v0.4.6] (https://github.com/raix/Meteor-famono/tree/v0.4.6)
#### 28/07/14 by Morten Henriksen
- *Fixed bug:* "bower 'toastr' package depends on jquery" [#42](https://github.com/raix/Meteor-famono/issues/42)

- implement the argument parser

- add parseDefineArguments

- use famono scoped define

- Use Famono.scope in autogen files

## [v0.4.5] (https://github.com/raix/Meteor-famono/tree/v0.4.5)
#### 28/07/14 by Morten Henriksen
- *Fixed bug:* "famono seems to break client/compatibility folder" [#53](https://github.com/raix/Meteor-famono/issues/53)

## [v0.4.4] (https://github.com/raix/Meteor-famono/tree/v0.4.4)
#### 28/07/14 by Morten Henriksen
- *Fixed bug:* ""use strict" being interpreted as a global" [#48](https://github.com/raix/Meteor-famono/issues/48)

## [v0.4.3] (https://github.com/raix/Meteor-famono/tree/v0.4.3)
#### 28/07/14 by Morten Henriksen
- if define return module then use instead

- add note about multiple defines returned modules

- add error stack for better debugging

- handle named defines seperatly

- add note about client/compatibility

## [v0.4.2] (https://github.com/raix/Meteor-famono/tree/v0.4.2)
#### 26/07/14 by Morten Henriksen
## [v0.4.1] (https://github.com/raix/Meteor-famono/tree/v0.4.1)
#### 26/07/14 by Morten Henriksen
- Don't require the use of /lib/folder

- Add backwards compability

## [v0.4.0] (https://github.com/raix/Meteor-famono/tree/v0.4.0)
#### 26/07/14 by Morten Henriksen
- Add support for http and multiple defines

## [v0.3.18] (https://github.com/raix/Meteor-famono/tree/v0.3.18)
#### 26/07/14 by Morten Henriksen
- clean up just a bit

## [v0.3.17] (https://github.com/raix/Meteor-famono/tree/v0.3.17)
#### 26/07/14 by Morten Henriksen
- Add Famono scoping Credit for the idea @speigg

- add some todo

## [v0.3.16] (https://github.com/raix/Meteor-famono/tree/v0.3.16)
#### 20/07/14 by Morten Henriksen
## [v0.3.15] (https://github.com/raix/Meteor-famono/tree/v0.3.15)
#### 20/07/14 by Morten Henriksen
- add bower index.js file

- document root path

- add "root" for libraries

- Add compability layer for dot notation

- fix spelling...

- Allow users to use Famono.require

## [v0.3.14] (https://github.com/raix/Meteor-famono/tree/v0.3.14)
#### 14/07/14 by Morten Henriksen
- Add the concept of alias

## [v0.3.13] (https://github.com/raix/Meteor-famono/tree/v0.3.13)
#### 14/07/14 by Morten Henriksen
## [v0.3.12] (https://github.com/raix/Meteor-famono/tree/v0.3.12)
#### 08/07/14 by Morten Henriksen
- update to package preview5

- Add more resets

- Give it a better description

- add some stuff for the new package system

- add some comments

## [v0.3.11] (https://github.com/raix/Meteor-famono/tree/v0.3.11)
#### 25/06/14 by Morten Henriksen
- Reset globals at rerun

- Don't print `;` if empty result

- Add support for coffee script comments

- move operator test

- remove duplicate code

- more clean ups

- clean up code

## [v0.3.10] (https://github.com/raix/Meteor-famono/tree/v0.3.10)
#### 24/06/14 by Morten Henriksen
- add verbosity annotations

- use nextOperator for better test

- added comment

- Comment words are separated by space

- add isComment test

- Improve warning about globals being overwritten

## [v0.3.9] (https://github.com/raix/Meteor-famono/tree/v0.3.9)
#### 24/06/14 by Morten Henriksen
## [v0.3.8] (https://github.com/raix/Meteor-famono/tree/v0.3.8)
#### 22/06/14 by Morten Henriksen
- Use word "warning"

## [v0.3.7] (https://github.com/raix/Meteor-famono/tree/v0.3.7)
#### 22/06/14 by Morten Henriksen
- *Fixed bug:* "Exclude 'tests' directory in search for require() calls" [#31](https://github.com/raix/Meteor-famono/issues/31)

- Don't add object keys as globals

- Use grandfather checking for typeof

- add some black magic docs

## [v0.3.6] (https://github.com/raix/Meteor-famono/tree/v0.3.6)
#### 19/06/14 by Morten Henriksen
- Do a proper needleList

- add library name in add library global dep

- only add one library pr. reference use last

- deprecate old polyfills references

- support old polyfill declaration - will deprecate

## [v0.3.5] (https://github.com/raix/Meteor-famono/tree/v0.3.5)
#### 19/06/14 by Morten Henriksen
- Improve error messages

- Improve parser if in typeof

## [v0.3.4] (https://github.com/raix/Meteor-famono/tree/v0.3.4)
#### 19/06/14 by Morten Henriksen
- add file name to error messages

- add famono-base to gitignore

## [v0.3.3] (https://github.com/raix/Meteor-famono/tree/v0.3.3)
#### 12/06/14 by Morten Henriksen
- add pretty print to completeTextify

- Use a DependencyLoad object directly in the global

## [v0.3.2] (https://github.com/raix/Meteor-famono/tree/v0.3.2)
#### 09/06/14 by Morten Henriksen
## [v0.3.1] (https://github.com/raix/Meteor-famono/tree/v0.3.1)
#### 09/06/14 by Morten Henriksen
## [v0.3.0] (https://github.com/raix/Meteor-famono/tree/v0.3.0)
#### 09/06/14 by Morten Henriksen
- Update docs etc.

- Refactor and minor fixes

- refactor library globals

- Add globals to functions

- Add the global dependencies to dependency loader

- Add the global dependency initializer

- Add core globals functionallities

- Add proper name converter

- Update parser with better error messages

- Add line numbers to parser

- Fix including root level dependencies

## [v0.2.3] (https://github.com/raix/Meteor-famono/tree/v0.2.3)
#### 05/06/14 by Morten Henriksen
- Add more bower notes

- Add bower to the smart.require

- First step towards library globals WIP

- Add note about cordova arc

- Add note about defining submodules

- add note about auto update of repos using latest

- So far I'm commenting out the automatic bower db

## [v0.2.2] (https://github.com/raix/Meteor-famono/tree/v0.2.2)
#### 06/05/14 by Morten Henriksen
- *Merged pull-request:* "Fix git "Too many arguments." Fixes #27" [#28](https://github.com/raix/Meteor-famono/issues/28) ([jperl](https://github.com/jperl))

- *Fixed bug:* "Problem cloning repo" [#27](https://github.com/raix/Meteor-famono/issues/27)

Patches by GitHub user [@jperl](https://github.com/jperl).

## [v0.2.1] (https://github.com/raix/Meteor-famono/tree/v0.2.1)
#### 04/05/14 by Morten Henriksen
- Add support for the `coffee.md` ext

## [v0.2.0] (https://github.com/raix/Meteor-famono/tree/v0.2.0)
#### 03/05/14 by Morten Henriksen
- We should let the package use Npm.require

- Add comments about client specific bundles

- Add better package lookup

- Add proper folder namespace

- Be a bit more soft in the edges

## [v0.1.9] (https://github.com/raix/Meteor-famono/tree/v0.1.9)
#### 01/05/14 by Morten Henriksen
- *Merged pull-request:* "Only scan files from apps and packages that depend on famono" [#22](https://github.com/raix/Meteor-famono/issues/22) ([jperl](https://github.com/jperl))

- Refactor getPackages -> eachPackage to be consistent with eachFile.

- Remove underscore dependency. Remove duplicate package checking code.

- Remove duplicate code. Replace _.each with forEach.

- Changes for PR review and some readme improvements.

- Only scan packages in .meteor/packages

- Make all formatting the same.

- Only scan files from apps and packages that depend on famono.

Patches by GitHub user [@jperl](https://github.com/jperl).

## [v0.1.8] (https://github.com/raix/Meteor-famono/tree/v0.1.8)
#### 29/04/14 by Morten Henriksen
- fix refactor rename of file

## [v0.1.7] (https://github.com/raix/Meteor-famono/tree/v0.1.7)
#### 29/04/14 by Morten Henriksen
- Fix issue when adding packages

- *Merged pull-request:* "Generify famo.us naming / references" [#20](https://github.com/raix/Meteor-famono/issues/20) ([jperl](https://github.com/jperl))

- Renamed files from famous to requirejs. Use underscore in file naming -- following meteor core packages.

Patches by GitHub user [@jperl](https://github.com/jperl).

## [v0.1.6] (https://github.com/raix/Meteor-famono/tree/v0.1.6)
#### 28/04/14 by Morten Henriksen
- Fix bug if empty object

## [v0.1.5] (https://github.com/raix/Meteor-famono/tree/v0.1.5)
#### 28/04/14 by Morten Henriksen
- Updated trying to resolve via the bower db

- Added lookup in bower db WIP

- npm cli to module

- made npm cli to module too

## [v0.1.4] (https://github.com/raix/Meteor-famono/tree/v0.1.4)
#### 25/04/14 by Morten Henriksen
- Add better loading algorithm and add future html

- Change to warnings

## [v0.1.3] (https://github.com/raix/Meteor-famono/tree/v0.1.3)
#### 25/04/14 by Morten Henriksen
- Have define set loaded to false at init

## [v0.1.2] (https://github.com/raix/Meteor-famono/tree/v0.1.2)
#### 24/04/14 by Morten Henriksen
- add library to the default dep list

## [v0.1.1] (https://github.com/raix/Meteor-famono/tree/v0.1.1)
#### 23/04/14 by Morten Henriksen
- mark as loading - since we are loading deps

- add list option

- Added CLI tool

## [v0.1.0] (https://github.com/raix/Meteor-famono/tree/v0.1.0)
#### 20/04/14 by Morten Henriksen
## [v0.0.30] (https://github.com/raix/Meteor-famono/tree/v0.0.30)
#### 20/04/14 by Morten Henriksen
- Improve and detection

## [v0.0.29] (https://github.com/raix/Meteor-famono/tree/v0.0.29)
#### 19/04/14 by Morten Henriksen
- Add support for commonJS modules

## [v0.0.28] (https://github.com/raix/Meteor-famono/tree/v0.0.28)
#### 19/04/14 by Morten Henriksen

## [v0.0.27] (https://github.com/raix/Meteor-famono/tree/v0.0.27)
#### 18/04/14 by Morten Henriksen
- fix realpath

## [v0.0.26] (https://github.com/raix/Meteor-famono/tree/v0.0.26)
#### 18/04/14 by Morten Henriksen

## [v0.0.25] (https://github.com/raix/Meteor-famono/tree/v0.0.25)
#### 18/04/14 by Morten Henriksen
- add suffix of name

## [v0.0.24] (https://github.com/raix/Meteor-famono/tree/v0.0.24)
#### 18/04/14 by Morten Henriksen
- its expected that exports are set

- Improve parser of modules

- Be more forgiving

## [v0.0.23] (https://github.com/raix/Meteor-famono/tree/v0.0.23)
#### 17/04/14 by Morten Henriksen
- added coffee script to the scan - untested!

- Added lazy loading

- Correct load order

## [v0.0.22] (https://github.com/raix/Meteor-famono/tree/v0.0.22)
#### 15/04/14 by Morten Henriksen
- Create lib version for rerunning on changes

- Add git update back in

- add scare fold for require.load

## [v0.0.21] (https://github.com/raix/Meteor-famono/tree/v0.0.21)
#### 15/04/14 by Morten Henriksen
- Add name i description

## [v0.0.20] (https://github.com/raix/Meteor-famono/tree/v0.0.20)
#### 15/04/14 by Morten Henriksen
- Update the css noop to new define format

## [v0.0.19] (https://github.com/raix/Meteor-famono/tree/v0.0.19)
#### 15/04/14 by Morten Henriksen
- Add pre requests for lazy loading

- Add server for lazy loading libs

- Rig count of bundled libraries WIP

## [v0.0.18] (https://github.com/raix/Meteor-famono/tree/v0.0.18)
#### 15/04/14 by Morten Henriksen
- Improve Error messages

- edit read me add note about local libraries

## [v0.0.17] (https://github.com/raix/Meteor-famono/tree/v0.0.17)
#### 14/04/14 by Morten Henriksen
- () are seperators in code

## [v0.0.16] (https://github.com/raix/Meteor-famono/tree/v0.0.16)
#### 14/04/14 by Morten Henriksen
- Add error messages on server-side use

## [v0.0.15] (https://github.com/raix/Meteor-famono/tree/v0.0.15)
#### 14/04/14 by Morten Henriksen
- allow famono to run through packages folder

## [v0.0.14] (https://github.com/raix/Meteor-famono/tree/v0.0.14)
#### 14/04/14 by Morten Henriksen
## [v0.0.13] (https://github.com/raix/Meteor-famono/tree/v0.0.13)
#### 14/04/14 by Morten Henriksen
- *Fixed bug:* "ReferenceError: require is not defined" [#5](https://github.com/raix/Meteor-famono/issues/5)

- *Fixed bug:* "Add .famono-repos to .gitignore :)" [#4](https://github.com/raix/Meteor-famono/issues/4)

## [v0.0.12] (https://github.com/raix/Meteor-famono/tree/v0.0.12)
#### 14/04/14 by Morten Henriksen
- remove the verbosity

## [v0.0.11] (https://github.com/raix/Meteor-famono/tree/v0.0.11)
#### 14/04/14 by Morten Henriksen
- add primitive support for packages

- fix issue #3

- rollback - did make no difference

- added doc for package creators

## [v0.0.10] (https://github.com/raix/Meteor-famono/tree/v0.0.10)
#### 14/04/14 by Morten Henriksen
- try to fix [#3](https://github.com/raix/Meteor-famono/issues/3)temp

## [v0.0.9] (https://github.com/raix/Meteor-famono/tree/v0.0.9)
#### 14/04/14 by Morten Henriksen
- *Fixed bug:* "Modules loading from different locations" [#2](https://github.com/raix/Meteor-famono/issues/2)

## [v0.0.8] (https://github.com/raix/Meteor-famono/tree/v0.0.8)
#### 14/04/14 by Morten Henriksen
- *Merged pull-request:* "mkdirSync -> fs.mkdirSync fixed" [#3](https://github.com/raix/Meteor-famono/issues/3) ([aitoroses](https://github.com/aitoroses))

- mkdirSync -> fs.mkdirSync fixed

- Add guide to registry clean

Patches by GitHub user [@aitoroses](https://github.com/aitoroses).

## [v0.0.7] (https://github.com/raix/Meteor-famono/tree/v0.0.7)
#### 14/04/14 by Morten Henriksen
- *Fixed bug:* "Modules loading from different locations" [#2](https://github.com/raix/Meteor-famono/issues/2)

## [v0.0.6] (https://github.com/raix/Meteor-famono/tree/v0.0.6)
#### 14/04/14 by Morten Henriksen
- Add better message on smart.require parse error

- add css files as deps

- don't run git pull - users should use tags instead

- add branch, tag and recursive options

- serve both js and css code

- make errors less verbose

- update the read me

- Add index for modules

## [v0.0.5] (https://github.com/raix/Meteor-famono/tree/v0.0.5)
#### 14/04/14 by Morten Henriksen
- Add the main css if found

## [v0.0.4] (https://github.com/raix/Meteor-famono/tree/v0.0.4)
#### 14/04/14 by Morten Henriksen
## [v0.0.3] (https://github.com/raix/Meteor-famono/tree/v0.0.3)
#### 14/04/14 by Morten Henriksen
- Add better error message i library not found

- Allow names to have `-`

## [v0.0.2] (https://github.com/raix/Meteor-famono/tree/v0.0.2)
#### 14/04/14 by Morten Henriksen
- clean up a bit

## [v0.0.1] (https://github.com/raix/Meteor-famono/tree/v0.0.1)
#### 14/04/14 by Morten Henriksen
- init commit

