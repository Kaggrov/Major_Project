import express from 'express'
import mongoose from 'mongoose'
import cors from'cors'
import multer from 'multer'
import {GridFsStorage} from 'multer-gridfs-storage'
import Grid from 'gridfs-stream'
import bodyParser from 'body-parser'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()
mongoose.set('strictQuery', true);
import mongoPosts from './postModel.js'
Grid.mongo = mongoose.mongo

//app config

const app = express();
const port = process.env.PORT || 9000


//middlewares
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(cors())


//db config

const mongoURI = process.env.MONGODB_URI 
const conn = mongoose.createConnection(mongoURI);

mongoose.connection.once('open',()=>{
    console.log('DB Connected');
})

let gfs,gridfsBucket

conn.once('open',()=> {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'images'
      });
    console.log('DB Connected');

    gfs = Grid(conn.db,mongoose.mongo);
    gfs.collection('images');
})

const storage = new GridFsStorage({
    url:mongoURI,
    file : (req,file) =>{
        return new Promise((resolve,reject) =>{
            const filename = `image-${Date.now()}${path.extname(file.originalname)}`

            const fileInfo = {
                filename: filename,
                bucketName: 'images'
            };

            resolve(fileInfo);
        });
    }
});

const upload = multer({storage});

 
mongoose.connect(mongoURI)

//api routes
app.get('/',(req,res)=> res.status(200).send("Hello"));
 
app.post('/upload/image',upload.single('file'),(req,res) => {
    console.log(req.file)
    res.status(201).send(req.file)
})
 
app.post('/upload/post',(req,res) =>{
    const dbPost = req.body;

    console.log(dbPost);

    mongoPosts.create(dbPost,(err,data) =>{
        if(err) {
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data);
        }
    })
})

app.post('/addComment',(req,res)=>{

    const comment = req.body;
    console.log(comment)
    mongoPosts.updateOne(
        { postId: comment.postId }, 
        { $push: { answers: comment }},
        (err,data) =>{
            if(err) {
                res.status(500).send(err)
            }
            else {
                res.status(201).send(data)
            }
        }
    );
})

app.get('/retrieve/posts',(req,res) =>{
    mongoPosts.find((err,data) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            data.sort((b,a)=>{
                return a.timestamp - b.timestamp;
            })

            res.status(200).send(data);
        }
    })

})


app.get('/retrieve/images/single', (req,res) =>{
    gfs.files.findOne({filename: req.query.name},(err,file) =>{
        if(err){
            res.status(500).send(err);
        }
        else{
            if(!file || file.length === 0){
                res.status(400).json({err :'file not found'})
            }
            else{
                console.log(file.filename);
                const readstream = gridfsBucket.openDownloadStreamByName(file.filename);
                readstream.pipe(res);
            }

        }
    })
})

app.get("/",function(req,res){
    res.send("Home page of Website");
});

app.get("/marketplace",function(req,res){
    res.send("Market place page of website")
})

app.get("/rent",function(req,res){
    res.send("Rent page of Website");
});

app.get("/product",function(req,res){
    res.send("Product page of Website");
});

app.get("/admin",function(req,res){
    res.send("Admin page of Website");
});

app.get("/sale",function(req,res){
    res.send("Sale page of Website");
});

app.get("/productSale",function(req,res){
    res.send("Product Sale page of Website");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});









//listen
app.listen(port,()=>console.log('listening'))