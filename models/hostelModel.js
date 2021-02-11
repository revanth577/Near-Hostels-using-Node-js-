const mongoose=require("mongoose");


const hostelSchema=new mongoose.Schema({

name:{
    type:String,
    required:true
},
description:String,
dailyPrice:{
    type:Number,
    required:true
},
monthlyPrice:{
type:Number,
required:true
    
},
city:{
    type:String,
    required:true
},
state:{

    type:String,
    required:true,
},
pincode:{
    type:Number,
    required:true
},
Address:{
    type:String,
    required:true
},
owner:{
    type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
}
    
})



const hostelModel=mongoose.model("Hostel",hostelSchema);


module.exports=hostelModel;