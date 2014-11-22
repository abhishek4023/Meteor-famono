## vNext

## 0.9.23
Revert the support for small libraries - this was attempt to fix issue #88 but it was the Simplify source reload that got famono working again.

## 0.9.22
Clean up chokidar listeners
Simplify source reload
Support small libraries without `index.js` eg. InfiniteScrollView pointing at a file `InfiniteScrollView.js`

## 0.9.21
Added more support for package.js new api

## 0.9.20
Improve path file watcher

## 0.9.19
* Added support for define(object) used by leaflet (issue #87)
* Workaround watcher issue when using local "path" library
* Library build version bumped to 0.1.13
* Added this file History.md!

## GAP --- Add more versions at some point - not now ZZzzzz....

## 0.1.2
Add library to the default dep list

## 0.1.1
Add cli tool on npm
Add list options
Mark as loading (since its loading)

## 0.1.0
Bump repo version

## 0.0.30
Improve detector

## 0.0.29
Add support for commonjs modules

## 0.0.28
Added define global (issue #15)

## 0.0.27
Fix realpath

## 0.0.26
Add check for circular references

## 0.0.25
Add suffix of name

## 0.0.24
Improve parser of modules
Set exports
Be more forgiving

## 0.0.23
Correct load order
Less verbosity
Added lazy loading
Added coffee script to the scanner

## 0.0.22
Add scafold for require.load
Add git update back in
Create lib version for rerunning on updated

## 0.0.21
Add name in description

## 0.0.20
Update the css noop to new define format

## 0.0.19
Rigs count of bundled libraries WIP
Added server for lazy-loading WIP

## 0.0.18
Edit read me add note about local libraries
Improve error messages

## 0.0.17
updated readme
() are seperators in code

## 0.0.16
Add error messages on the server-side

## 0.0.15
Allow famono to run through package folder

## 0.0.14
Better parser
Better comments

## 0.0.13
Move the installation check to compile_requirejs.js
add to gitignore fixed #4

## 0.0.12
Remove verbosity

## 0.0.11
Added documentation for package creators
Rollback fix
Added primitive support for packages
Fix issue #3

## 0.0.10
Try to fix #3 temporary

## 0.0.9
Fixed issue 2 - again

## 0.0.8
Added guide to registry clean
fixed mkdirSync -> fs.mkdirSync
Edit readme

## 0.0.7
Fixed issue 2

## 0.0.6
Add "index" for modules eg. famous -> famous/index
Make error messages less verbose
Serve both js and css
Dont use git pull use tags instead
add css files as deps
Add branch/tag and recursive options to smart.require
Add better errors on smart.require parse errors

## 0.0.5
Add the main css if found
Cleaned up code

## 0.0.4
Updated the readme

## 0.0.3
Allow names to have "-"
Added better error messages

## 0.0.2
Added readme
Cleaned up code

## 0.0.1
Initial commit