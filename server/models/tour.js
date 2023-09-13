import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
   title:{
    type:String, 
   },

   description:{
    type:String
   },
  
   name:{
    type:String, 
   },
   creator:{
    type:String, 
   },
    tags:[String],
    imageFile:{
        type:String, 
    },
    createdAt:{
        type:Date,
        default: new Date(),
    },
    likeCount: {
        type: Number,
        default :0,
    },
});

const TourModel = mongoose.model("Tour", tourSchema);
export default TourModel


