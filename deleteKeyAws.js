/**
 * Created by rahuljain on 11/23/16.
 */

// Load the SDK and UUID
var AWS = require('aws-sdk');
// var uuid = require('node-uuid');

var bucketName = 'imagelop';

function deleteFromAws() {
    var s3bucket = new AWS.S3({
        params: {Bucket: bucketName}
    });
    var urlParams = {
        Bucket: 'imagelop',
        Delete: {
            Objects: [
                {Key: 'mypicRj.jpg'}
            ]
        }
    };
    s3bucket.deleteObjects(urlParams, function(err, data) {
        if (err)
            return console.log(err);
        console.log('success in deletion of key/keys');
    });
}

deleteFromAws();
