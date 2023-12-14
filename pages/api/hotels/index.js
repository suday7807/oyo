import connectDB from "src/db";
import Hotel from "src/models/hotel-model";

export default async function handler(req, res) {
  connectDB();
  // console.log(req.body);
  // if (req.method === "POST") {
  //   const hotel = await Hotel.create(req.body);
  //   res.status(201).json({ msg: "Hotel added", hotel });
  // }

  if (req.method === "GET") {
    const hotels = await Hotel.find({ location: req.query.city });
    if (hotels.length > 0) {
      return res.status(200).json({ msg: "Good", hotels });
    }
    const allhotels = await Hotel.find({});
    return res.status(200).json({ msg: "Good", allhotels });
  }
}
