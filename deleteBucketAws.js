/**
 * Created by rahuljain on 11/23/16.
 */

// Load the SDK and UUID
var AWS = require('aws-sdk');
// var uuid = require('node-uuid');

var bucketName = 'testingbucketnetwork';

function deleteBucket() {
    var s3bucket = new AWS.S3({
        params: {Bucket: bucketName}
    });
    s3bucket.deleteBucket({Bucket: bucketName}, function(err, data) {
        if (err)
            return console.log(err);
        console.log('success in deletion of bucket');
    });
}

deleteBucket();