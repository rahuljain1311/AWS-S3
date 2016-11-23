/**
 * Created by rahuljain on 11/23/16.
 */

// Load the SDK and UUID
var AWS = require('aws-sdk');
// var uuid = require('node-uuid');

var bucketName = 'testingnetwork';

function deleteFromAws() {
    var s3bucket = new AWS.S3({
        params: {Bucket: bucketName}
    });

    var urlParams = {Bucket: bucketName, Key: 'mypicRj.jpg' };
    s3bucket.deleteObjects(urlParams);
    // s3bucket.getObject(params, function(errBucket, dataBucket) {
    //     if (errBucket) {
    //         console.log("Error uploading data: ", errBucket);
    //     } else {
    //         console.log(dataBucket);
    //     }
    // });
}

deleteFromAws();
