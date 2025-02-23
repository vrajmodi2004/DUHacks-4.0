import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;

// import mongoose from "mongoose";

// const connectDB = async ()=>{

//     mongoose.connection.on('connected',()=>{
//         console.log("DB connected");

//     })

//     await mongoose.connect(`${process.env.MONGODB_URI}/MedFast`)
// }

// export default connectDB;
