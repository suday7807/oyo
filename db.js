import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017", {
      dbName: "OYO",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database connected"))
    .catch((e) => console.log(e));
};

export default connectDB;
