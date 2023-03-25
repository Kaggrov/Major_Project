import mongoose from "mongoose";

const userModal = mongoose.Schema({
      userName:String,
      password:String,
      name:String,
      expiry:String
})

export default mongoose.model('users',userModal)