/**
 * Created by rahuljain on 11/22/16.
 */

var AWS = require('aws-sdk');
// Create a bucket and put something in it.
var s3 = new AWS.S3();
s3.createBucket({Bucket: 'testingnetwork'}, function() {
    // var data = {Bucket: 'hackathon-test', Key: 'myKey', Body: 'Hello!'};
    // s3.putObject(data, function(err, data) {
    //     if (err) {
    //         console.log("Error uploading data: ", err);
    //     } else {
    //         console.log("Successfully uploaded data to myBucket/myKey");
    //     }
    // });
});
