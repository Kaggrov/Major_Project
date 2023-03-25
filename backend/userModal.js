import mongoose from "mongoose";

const userModal = mongoose.Schema({
      userName:String,
      password:String,
      name:String,
      products:[
            {
                  expiry:String,
                  product:String
            }
      ]
})

export default mongoose.model('users',userModal)