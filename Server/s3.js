import aws from 'aws-sdk';
import { randomBytes } from "crypto"
import dotenv from 'dotenv'
import {promisify} from 'util'

const region = "us-west-2";
const bucketName = "fadeitbarbershop";
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey= process.env.AWS_SECRET_ACCESS_KEY_ID;

const s3 = new aws.S3({

    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion:'4'

})


s3.listBuckets(function(err, data) {
    if(err){
        console.log("Error", err)
    }
    else {
        console.log("Success", data.Buckets)
    }
})



// export async function generateUploadURL() {

//     const rawBytes = await randomBytes(16);
//     const imageName = rawBytes.toString("hex")


//     const params = ({
//         Bucket: bucketName,
//         Key: imageName,
//         Expires: 60
//     })

//     const uploadURL = await s3.getSignedUrlPromise('putObject', params);

//     return uploadURL
// }