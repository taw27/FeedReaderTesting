# Feed Reader Testing (Udacity Front End Project 5)

## Table of Contents

* [Description](#description)
* [Viewing Instructions](#viewing-instructions)
* [Tests Performed](#tests-performed)

## Description

In this project I was given the task of writing test suites using Jasmine for a feed reader app, which was already provided to me by Udacity. The initial state of the project already included [Jasmine](http://jasmine.github.io/) and one test suite. The remaining tests I performed are noted [below](#tests-performed) 

## Viewing Instructions
1. Download the project
2. Open index.html
3. Scroll down until you see Jasmine
4. See the successful test suites that were performed 

## Tests Performed

1. Wrote a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
2. Wrote a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
3. Wrote a new test suite named `"The menu"`.
4. Wrote a test that ensures the menu element is hidden by default.
5. Wrote a test that ensures the menu changes visibility when the menu icon is clicked. 
6. Wrote a test suite named `"Initial Entries"`.
7. Wrote a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
8. Wrote a test suite named `"New Feed Selection"`.
9. Wrote a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
