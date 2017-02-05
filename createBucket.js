/**
 * Created by rahuljain on 11/22/16.
 */

var AWS = require('aws-sdk');
var s3 = new AWS.S3();
s3.createBucket({Bucket: 'imagelop'}, function(err, data) {
    if (err)
        return console.log(err);
    console.log('success in bucket creation');
});
