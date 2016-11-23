
// Load the SDK and UUID
var AWS = require('aws-sdk');
// var uuid = require('node-uuid');

// Create a bucket and upload something into it
var bucketName = 'testingnetwork';
var fs = require('fs');



function getFileFromAmazon() {
    var s3bucket = new AWS.S3({
        params: {Bucket: bucketName}
    });

    var urlParams = {Bucket: bucketName, Key: 'img.jpg', Expires: 99999999};
    s3bucket.getSignedUrl('getObject', urlParams, function(err, url){
        console.log('the url of the image is', url);
    });
    // s3bucket.getObject(params, function(errBucket, dataBucket) {
    //     if (errBucket) {
    //         console.log("Error uploading data: ", errBucket);
    //     } else {
    //         console.log(dataBucket);
    //     }
    // });
}

getFileFromAmazon();




