
// Load the SDK and UUID
var AWS = require('aws-sdk');
// var uuid = require('node-uuid');

var bucketName = 'clsdb01localimagebucket';
var fs = require('fs');
var request = require('request');


var download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

function getFileFromAmazon() {

    var s3bucket = new AWS.S3({
        params: {Bucket: bucketName}
    });
    var urlParams = {Key: '' + 31 };
    s3bucket.getSignedUrl('getObject', urlParams, function(err, url){
        console.log('the url of the image is', url);

        download(url, 'google1311.jpg', function(){
            console.log('done');
        });
        // var imgStream = s3bucket.getObject(urlParams).createReadStream();
        // return imgStream;
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




