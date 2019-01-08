/*casper.test.begin('Work Events Site Tests', 2, function suite(test) {
casper.start('https://weui-test.workevents.a2z.com/', function() {
test.assertHttpStatus(200, '01 - Work Events website must be up and running.');
test.assertTitleMatch(/^Work Events$/, '02 - Homepage title must be Work Events.');
});
casper.run(function() {
test.done();
});
});*/

casper.test.begin('Work Events Site Tests', function suite(test) {
 
casper.start();

casper.thenOpen('https://weui-test.workevents.a2z.com/', function() {
    test.assertHttpStatus(200, 'Work Events website must be up and running.');
    test.assertTitleMatch(/^Work Events$/, 'Homepage title must be Work Events.');
});
 
casper.thenOpen('https://taapi-ui-beta.corp.amazon.com/core/v1/employees/current', function(response) {
    //test.assertHttpStatus(200, 'WeAccess must return permissions.');
    utils.dump(response)
    utils.dump(response.status);
    if (response == undefined || response.status >= 400) this.echo("failed", 'GREEN_BAR');
});

/*
casper.on('http.status.200', function(resource) {
  this.echo('This url is 404: ' + resource.url, 'GREEN_BAR');
});
*/
casper.run(function() {
  casper.exit();
});
});