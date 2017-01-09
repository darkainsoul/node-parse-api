// this file runs tests against the rest api key
var Parse = require('../index').Parse;

// use environment variables APPLICATION_ID and MASTER_KEY to test against
var application_id = process.env.APPLICATION_ID;
var rest_api_key = process.env.REST_API_KEY;

// require the environment variables, or exit with explanation
if (!application_id || !rest_api_key) {
  console.log('Set the following environment variables for the test Parse app');
  console.log('  export APPLICATION_ID=...');
  console.log('  export REST_API_KEY=...');
  process.exit(1);
}

// global objects to test against
var parse = new Parse({app_id: application_id, api_key: rest_api_key});
var user = {username: 'demo', password: 'demo'};

exports.userLogin = function (test) {
    test.expect(4);
    parse.loginUser(user.username, user.password, function (error, response) {
      console.log("OK: " + response);
        test.ok(!error, 'Login failed.');
        test.equal(user.username, response.username, 'Should be the same username.');
        test.done();
    });
};