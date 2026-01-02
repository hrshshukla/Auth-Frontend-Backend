import mongoose from "mongoose";

const connectDB = () => {

  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log(`Connected to DB port ${process.env.MONGO_URI} `);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB;