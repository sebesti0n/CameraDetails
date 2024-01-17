const mongoose =require('mongoose')
const validator =require('validator')

const detailSchema = mongoose.Schema({
    camID:{
        type:Number,
        required:true
    },
    licensePlateNumber:{
        type:String,
        required:true
        
    },
    longitude:{
        type:String,
        
    },
    latitude:{
        type:String,
    },
    detectionConfidence:{
        type:Number
    }
    
});

const det = new mongoose.model("CamDetails",detailSchema);

module.exports = det;