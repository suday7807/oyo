import Hotel from "src/models/hotel-model";

export default async function hanler(req, res) {
  if (req.method === "POST") {
    const hotel = Hotel.create(req.body);
    res.status(201).json({ msg: "Hotel added", hotel });
  }
}
