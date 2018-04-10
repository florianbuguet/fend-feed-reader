# Project Overview

This project is a web-based application that reads RSS feeds. Tests were developed to ensure robustness of the tool using [Jasmine](http://jasmine.github.io/). Details about the test suite can be found in the `jasmine/spec/feedreader.js` file.

##  Set up
Clone this repository, unzip it and open the index.html file. The loaded page will show you the jasmine test dedicated seciont at the bottom.

## Test Suite Description
ALl the tests can be found documented in the `jasmine/spec/feedreader.js` file.

These are the different tests that you will find in the spec:
1. Check if allFeeds variables are defined and not empty
2. Test that allFeeds variables have a url and name that are defined and not empty
3. Check the menu is hidden by default
4. Verify the menu behavior when clicked (appears on first click dispappear on second click)
5. Check the asynchronous function loadFeed is loaded and that the entry feeds are filled
6. Loop through feeds to make sure we have unique feeds loaded