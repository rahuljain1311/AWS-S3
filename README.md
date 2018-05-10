# AWS SDK for Node.js Sample Project

A simple Node.js application illustrating usage of the AWS SDK for Node.js.

## Requirements

The only requirement of this application is the Node Package Manager. All other
dependencies (including the AWS SDK for Node.js) can be installed with:

    npm install

## Basic Configuration

You need to set up your AWS security credentials before the sample code is able
to connect to AWS. You can do this by creating a file named "credentials" at ~/.aws/ 
(C:\Users\USER_NAME\.aws\ for Windows users) and saving the following lines in the file:

    [default]
    aws_access_key_id = <your access key id>
    aws_secret_access_key = <your secret key>

See the [Security Credentials](http://aws.amazon.com/security-credentials) page.
It's also possible to configure your credentials via a configuration file or
directly in source. See the AWS SDK for Node.js [Developer Guide](http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html)
for more information.

## Running the S3 sample

This sample application connects to Amazon's [Simple Storage Service (S3)](http://aws.amazon.com/s3),
and do basic operations there. The script will automatically
create the file to upload. All you need to do is run it like `node <fileName.js>` 
Eg.

    node createBucket.js
    node uploadToAws.js
    node downloadFromAmazon.js
    node deleteBucketAws.js
    node deleteKeyAws.js

The S3 documentation has a good overview of the [restrictions for bucket names](http://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html)
for when you start making your own buckets.


## Running Twilio starter kit: 
1. Run `node twilioServer.js`. It will start running on port 3000
2. Expose local port 3000 to internet using ngrok. `./ngrok http -host-header="http://127.0.0.1:3000" 3000`. ngrok executable file is present in the downloads folder
3. Change phone number in twilioCall.js file. Also dont forget to replace authtoken. To call the person `node twilioCall.js`


## License

This sample application is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

