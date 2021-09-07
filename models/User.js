const mongoose=require("mongoose");

const schema=mongoose.Schema;
const userShema = new schema ({
    name:{
        type : String,
        required:true,
    },
    email:{
        type:String,
       unique:true,
    },
    phone:String,
})

module.exports = User = mongoose.model("user",userShema);