import connectDB from "src/db";
import Hotel from "src/models/hotel-model";

export default async function handler(req, res) {
  connectDB();
  if (req.method === "POST") {
    const hotel = await Hotel.create({ hotel: req.body });
    res.status(201).json({ msg: "Hotel added", hotel });
  }
}
