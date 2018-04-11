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
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds constiable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds constiable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it("each feed has a URL and URL is not empty", function(){
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });


        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it("each feed has a name and name is not empty", function(){
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* Write a new test suite named "The menu" */
    describe("The menu", function(){
        /* Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it("menu element hidden by default", function(){
            const body = $('body');
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
         /* Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
        */

         it("appear on click and hide on second click", function(){
            //define two constiables menu and body
            const menu = $('.menu-icon-link');
            const body = $('body');
            //event listener to track click on menu and check if menu is showed on click 
            menu.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(false);
            //same event listener to check if menu is then hidden on second click
            menu.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });
    

    /* Write a new test suite named "Initial Entries" */
    describe("Initial Entries",function(){ 
        /* Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        //test the asynchronous function loadFeed() 
         beforeEach(function(done){
            loadFeed(0,done);
         });
         // test feed entry is filled
         it("has at least a single .entry element within the .feed container", function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
          });
    });

    /* Write a new test suite named "New Feed Selection" */
    describe("New Feed Selection", function(){
        /* Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        // define an old feed from a new one with two variables
        let oldFeed;
        let newFeed;
        // use the beforeEach and done function to test asynchronous function
         beforeEach(function(done) {
            $('.feed').empty();
            loadFeed(0, function(){
                // store the old feed HTML class in the dedicated variable
                oldFeed = $('.feed').html();
                loadFeed(1, done);
                });
            });

        // compare the two feeds and test if different
         it("verify that content is changed upon each loadFeed() load", function() {
            newFeed = $('.feed').html();
            expect(oldFeed).not.toBe(newFeed);
         });
    });
}());
