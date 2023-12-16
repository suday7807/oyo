import connectDB from "src/db";
import Hotel from "src/models/hotel-model";

export default async function handler(req, res) {
  connectDB();
  if (req.method === "GET") {
    const facilities = await Hotel.find({}).distinct("facilities.name");
    res.status(200).json({ msg: "Achha Lagta hai !", facilities });
  }
}
