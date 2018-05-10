const http = require('http');
const express = require('express');
const ClientCapability = require('twilio').jwt.ClientCapability;
const VoiceResponse = require('twilio').twiml.VoiceResponse;


const app = express();

app.get('/token', (req, res) => {
  // put your Twilio API credentials here
  const accountSid = 'ACf62d44c00c7cb127b6620fa06170ae9e';
  const authToken = '***';

  // put your Twilio Application Sid here
  const appSid = 'AP58edd56d029a8a1a061f0ac1c1106395';

  const capability = new ClientCapability({
    accountSid: accountSid,
    authToken: authToken,
  });
  capability.addScope(
    new ClientCapability.OutgoingClientScope({ applicationSid: appSid })
  );
  capability.addScope(new ClientCapability.IncomingClientScope('joey'));
  const token = capability.toJwt();

  res.set('Content-Type', 'application/jwt');
  res.send(token);
});

app.post('/voice', (req, res) => {
  // Create TwiML response
  const twiml = new VoiceResponse();
  twiml.say('Thank you for calling CVS. We are sending you the list of pharmacies for your urgent care needs via SMS. Please schedule an appointment and visit the doctor accordingly!');

  res.set('Content-Type', 'text/xml');
  res.send(twiml.toString());
});

http.createServer(app).listen(3000, '127.0.0.1');
console.log('Twilio Client app server running at http://127.0.0.1:3000/token/');
