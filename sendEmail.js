var aws = require('aws-sdk');
var fs = require('fs');
var _ = require('lodash');

aws.config.region = 'eu-west-1';
var ses = new aws.SES();
var to = ['rahuljain1311@gmail.com']
var from = 'rahuljain1311@gmail.com'

const replacementArray = [
  'Allison', 
  'https://www.google.com', 
  'You are 20x more likely to get the flu in the next 10 days',
  'Our data shows an elevated level of the flu in 8-10 year olds in the 12345 zip code',
  'Flu shots are free and reduce your family\'s risk by 50%',
  'http://www.adobe.com/',
  'https://www.google.com', 
  'https://www.google.com', 
]

var emailContent;
fs.readFile('./template1.html', 'utf-8',function read(err, data) {
    if (err) {
        throw err;
    }
    emailContent = data;
    processFile();
});

function replaceContent(text1, text2){

  emailContent = _.replace(emailContent, text1, text2);
}

function processFile() {

  _.forEach(replacementArray, (text2, index) => {
      const text1 = '[[' + index + ']]';
      replaceContent(text1, text2);
  })
  console.log('HTML data = ', emailContent);
  var params = {
    Destination: {
      ToAddresses: to
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: emailContent
        },
        Text: {
          Charset: 'UTF-8',
          Data: 'This is the message body in text format.'
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Test email from code'
      }
    },
    ReturnPath: from,
    Source: from
  }

  ses.sendEmail(params, (err, data) => {

    if (err) console.log(err, err.stack)
    else console.log(data)
  })
}