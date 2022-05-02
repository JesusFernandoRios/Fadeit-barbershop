import AWS from "aws-sdk"

AWS.config.update({region: "us-west-2"})

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey= process.env.AWS_SECRET_ACCESS_KEY_ID;

const s3 = new AWS.S3({
    apiVersion: '2022-05-01',
    accessKeyId,
    secretAccessKey
});

s3.listBuckets(function(err, data) {
    if(err){
        console.log("Error", err)
    }
    else {
        console.log("Success", data.Buckets)
    }
})
