import React , { useState} from 'react'
import S3FileUpload from 'react-s3'



const config = {
  bucketName: 'fadeitbarbershop',
  dirName: 'Images', /* optional */
  region: 'us-west-2',
  accessKeyId: "AKIAZMNA4STSMSLGBREM",
  secretAccessKey: "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",
  signatureVersion: "v4"
}

function Administrator() {

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (e) => {
      setSelectedFile(e.target.files[0]);
      console.log(e.target.files[0])
  }

  const handleUpload = async (file) => {

      S3FileUpload
      .uploadFile(file, config)
      .then(data => console.log(data.location))
      .catch(err => console.error(err))

  }

  return <div>

      <div>React S3 File Upload</div>
      <input type="file" onChange={handleFileInput}/>

      <button onClick={() => handleUpload(selectedFile)}> Upload to S3</button>

  </div>
}

export default Administrator