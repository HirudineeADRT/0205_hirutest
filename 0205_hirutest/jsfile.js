let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();
const s3 = new AWS.S3();
const hirutest = new s3.listObjects({
    'Bucket': 'as2-test-lahiru',
    'MaxKeys': 10,
    'Prefix': ''
}).promise()
    .then(data => {
        console.log(data); 

        cognito_idp.listUsers({
        UserPoolId: process.env.UserPoolId_cognitol,
        Limit: 10
        }).promise()
                    .then(data => {
                        // your code goes here
                    })
                    .catch(err => {
                        // error handling goes here
                    });
        
        
        s3.listObjects({
            'Bucket': 'as2-test-lahiru',
            'MaxKeys': 10,
            'Prefix': ''
        }).promise()
            .then(data => {
                console.log(data);           // successful response
                /*
                data = {
                    Contents: [
                        {
                           ETag: "\"70ee1738b6b21e2c8a43f3a5ab0eee71\"",
                           Key: "example1.jpg",
                           LastModified: "<Date Representation>",
                           Owner: {
                              DisplayName: "myname",
                              ID: "12345example25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
                           },
                           Size: 11,
                           StorageClass: "STANDARD"
                        },
                        // {...}
                    ]
                }
                */
            })
            .catch(err => {
                console.log(err, err.stack); // an error occurred
            });
                  // successful response
        /*
        data = {
            Contents: [
                {
                   ETag: "\"70ee1738b6b21e2c8a43f3a5ab0eee71\"",
                   Key: "example1.jpg",
                   LastModified: "<Date Representation>",
                   Owner: {
                      DisplayName: "myname",
                      ID: "12345example25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
                   },
                   Size: 11,
                   StorageClass: "STANDARD"
                },
                // {...}
            ]
        }
        */
    })
    .catch(err => {
        console.log(err, err.stack); // an error occurred
    });

    module.exports = hirutest;
