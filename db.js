import mongoose from "mongoose";

const URI = process.env.MONGO_URI;

const connectDB = () => {
  mongoose
    .connect(URI, {
      dbName: "OYO",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database connected"))
    .catch((e) => console.log(e));
};

export default connectDB;
