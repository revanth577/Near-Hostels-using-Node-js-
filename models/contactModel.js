const mongoose=require("mongoose");





const contactSchema=new mongoose.Schema({
    
    
    name:{
        type:String,
        required:true
    },
    
    
    email:{
        type:String
    }
    ,
    mobile:{
        type:Number,
        required:true
    },
    hostelId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Hostel'
    },
    date:{
        type:Date,
        defualt:Date.now()
    }
    

    
})




const contactModel=mongoose.model("Contact",contactSchema)



module.exports=contactModel;






