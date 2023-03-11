import mongoose from "mongoose";

const postModel = mongoose.Schema({
    postId:String,
    user: String,
    imgName: String,
    text: String,
    avatar: String,
    timestamp: String,
    answers:[
        {
            postId:String,
            user: String,
            imgName: String,
            text: String,
            avatar: String,
            timestamp: String,
        }
    ],
})

export default mongoose.model('posts',postModel)