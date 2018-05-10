var AWS = require('aws-sdk');
AWS.config.region = 'us-west-2';
var sns = new AWS.SNS();

var params = {
  Message: '123456789a123456789b123456789c123456789d123456789e123456789f123456789g123456789h123456789i123456789j123456789k123456789l123456789m123456789n123456789o123456789p123456789q123456789r123456789s123456789t123456789u123456789v123456789w123456789x123456789y123456789z123456789a123456789b123456789c123456789d123456789e123456789f123456789g',
  MessageStructure: 'string',
  PhoneNumber: '+919741381041',
  Subject: 'RJ testing'
};

sns.publish(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
