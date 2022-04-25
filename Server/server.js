import express from 'express';


//testing
import fileUpload from 'express-fileupload'
import cors from "cors"

const app = express();
import {generateUploadURL} from './s3.js'


app.use(express.static("public"));
app.use(cors());
app.use(fileUpload())

app.post('/upload', (req, res) => {
    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
        // accessing the file
    const myFile = req.files.file;
    //  mv() method places the file inside public directory
    myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
        // returing the response with file path and name
        return res.send({name: myFile.name, path: `/${myFile.name}`});
    });
})

app.get("s3Url", (req, res) => {
   const url = generateUploadURL()
   res.send({url})
})

app.listen(4500, () => console.log("listening on port 4500"))