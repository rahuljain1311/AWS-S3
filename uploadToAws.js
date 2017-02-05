
// Load the SDK and UUID
var AWS = require('aws-sdk');
// var uuid = require('node-uuid');
var bucketName = 'imagelop';
var fs = require('fs');

function sendFileToAmazon() {
  var s3bucket = new AWS.S3({
    params: {Bucket: bucketName},
    signatureVersion: 'v4'
  });

  var params = {Key: 'imgNew1.jpg', Body: ''};

  fs.readFile('./zombie.jpg', function(err, data) {
    if (err) throw err;
    params.Body = data;

    s3bucket.putObject(params, function(errBucket, dataBucket) {
      if (errBucket) {
        console.log("Error uploading data: ", errBucket);
      } else {
        console.log(dataBucket);
      }
    });
  });
}
sendFileToAmazon();