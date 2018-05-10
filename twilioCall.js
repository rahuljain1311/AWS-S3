// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACf62d44c00c7cb127b6620fa06170ae9e';
const authToken = '***';
const client = require('twilio')(accountSid, authToken);

client.calls
      .create({
         url: 'https://3c957ef7.ngrok.io/voice',
         from: '+919741381041',
        //  to: '+18582453963'
         to: '+919741381041'
       })
      .then(call => console.log(call.sid))
      .done();