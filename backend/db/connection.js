import mongoose from "mongoose";

const connection = async ()=>{
    try {
        await mongoose.connect(`${process.env.URI}`)
        .then(()=>console.log("connected to db"))
    } catch (error) {
        console.log("failed to connect db")
    }
}

export default connection