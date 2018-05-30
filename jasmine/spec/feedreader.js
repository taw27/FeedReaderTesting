/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in application.
    */
    describe('RSS Feeds', function() {
        /* tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has URL defined and not empty',function(){
            allFeeds.forEach(function (feed){
                expect(feed["url"]).toBeDefined();
                expect(feed["url"]).toMatch(".com");
            })
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it("has a name defined and not empty", function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(typeof(feed.name)).toMatch("string");
            })
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe("The menu", function(){
        const htmlBod= document.querySelector("body");

        /* test that ensures the menu element is
         * hidden by default
         */
        it("has menu hidden by default", function(){
            expect(htmlBod.className).toEqual("menu-hidden"); 
        });

         /*  test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it("Should toggle",function(){
            let menuIcon = document.querySelector('.menu-icon-link'); //saves pointer to the menu
            
            menuIcon.click(); //clicks the menu icon to make it visible
            expect(htmlBod.className).not.toEqual("menu-hidden"); //checks to see if menu is visible
            menuIcon.click(); //clicks the menu icon to hide it again
            expect(htmlBod.className).toEqual("menu-hidden"); //checks if menu is actually hidden
        });
    });

     /*test suite named "Initial Entries" */

    describe("Initial Entries",function(){
        /* a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

        beforeEach(function(done){
            loadFeed(0,function(){ //loads initial feed
                done();//uses done to to let jasmine know that the async function is completed
            });
        });

        it("showl have atleast 1 entrie", function(done){
            expect(document.querySelector(".feed").childElementCount).toBeGreaterThan(0); //checks if there is atleast 1 entry in the feed
            done(); 
        });
    });

    /*test suite named "New Feed Selection" */
    describe("New Feed Selection ",function(){
        let firstFeed=[]; // Initialising variable that will holds feed 
        let secondFeed=[]; // Initialising variable that will hold seconf feed

        /* a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        beforeEach(function(done){
            loadFeed(0,function(){ //loads first feed
                firstFeed= document.querySelector(".feed").innerHTML; // saves the html of first feed
                loadFeed(1, function(){ // loads second feed after first feed has been successfully loaded
                    secondFeed= document.querySelector(".feed").innerHTML;  // saves html of newly loaded feed
                    done(); //lets jasmine know that async function completed
                });
            });
        });

        it("should change feed", function(done){
            expect(firstFeed).not.toEqual(secondFeed); //checks if newly loaded feed differs and passes if it does
            done(); 
        });
    });
}());
