var mailgun = require("mailgun-js");
var fs = require('fs');
var _ = require('lodash');

var api_key = '*****';
var DOMAIN = '*****';


var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});

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
  
	var data = {
	  from: 'Excited User <rahuljain1311@gmail.com>',
	  to: 'rahuljain1311@gmail.com',
	  subject: 'Hello',
	  text: 'Testing some Mailgun awesomness!',
    html: '<html>HTML version of the <b>body </b> </html>',
    attachment: __dirname + '/zombie.jpg',
    filename: 'zom'
	};
	data.html = emailContent;
	mailgun.messages().send(data, function (error, body) {
	  console.log(body);
	});
}