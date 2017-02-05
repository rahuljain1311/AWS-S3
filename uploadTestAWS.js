
// Load the SDK and UUID
var AWS = require('aws-sdk');
// var uuid = require('node-uuid');
var bucketName = 'clsdb01localimagebucket';
var fs = require('fs');

function sendFileToAmazon() {
  var s3bucket = new AWS.S3({
    params: {Bucket: bucketName}
  });

  var params = {Key: 'img.jpg', Body: ''};

  fs.readFile('./img.jpg', function(err, data) {
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