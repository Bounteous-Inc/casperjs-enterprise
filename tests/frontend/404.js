casper.test.begin('404 Not Found', function suite(test) {

    // Start page
    casper.start(mage.getUrl('not-found'), function () {

        test.assertHttpStatus(404);

        test.assertTitle('404 Not Found 1');
        test.assertExists('body.cms-index-noroute');
        test.assertSelectorHasText('.page-head-alt', 'We are sorry, but the page you are looking for cannot be found.');
    })

    .run(function () {
        test.done();
    });
});

