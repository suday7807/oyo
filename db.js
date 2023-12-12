import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017", {
      dbName: "OYO",
      useNewUrlParser: true,
      useUnifiendTopology: true,
    })
    .then(() => console.log("Database connected"))
    .catch((e) => console.log(e));
};

export default connectDB;
