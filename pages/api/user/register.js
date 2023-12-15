import connectDB from "src/db";
import User from "src/models/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    connectDB();
    const { name, password, email } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ msg: "All fields are mandatory" });
    }
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already Exist" });
    }

    const hassedPassword = await bcrypt.hash(password, 10);

    user = await User.create({
      name,
      email,
      password: hassedPassword,
    });

    const token = jwt.sign({ user: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    return res.status(201).json({ msg: "Registered successfully", token });
  }
}
