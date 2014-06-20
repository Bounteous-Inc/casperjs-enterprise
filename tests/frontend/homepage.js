casper.test.begin('Homepage', function suite(test) {

    // Start page
    casper.start(mage.getBaseUrl(), function () {
        test.assertHttpStatus(200);
        test.assertTitle('Home page');
        test.assertExists('body.cms-index-index');
        test.assertExists('.page .header-container .header h1.logo a[href="' + mage.getBaseUrl() + '"]');
    })

    .run(function () {
        test.done();
    });
});

