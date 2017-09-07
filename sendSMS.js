var AWS = require('aws-sdk');
AWS.config.region = 'ap-southeast-2';
var sns = new AWS.SNS();

var params = {
  Message: 'Hi this is a test message, you health insurence link is: http://35.154.96.77/#/ --rahul jain',
  MessageStructure: 'string',
  PhoneNumber: '+19732342650',
  Subject: 'RJ testing'
};

sns.publish(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
