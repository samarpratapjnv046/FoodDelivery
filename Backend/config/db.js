import mongoose from "mongoose"

export const connectDB =async ()=>{
    await mongoose.connect('mongodb+srv://samarpratapjnv046:SamarYadav@cluster0.7dgbwql.mongodb.net/food-del').then(()=>console.log("DB connected"));
        
    }
