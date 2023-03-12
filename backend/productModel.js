import mongoose from "mongoose";

const productModel = mongoose.Schema({
    title: String,
    imgName: String,
    description: String,
    price:String,
    type:String,
    timestamp: String,
})

export default mongoose.model('products',productModel)