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
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(400).json({ msg: "User already Exist" });
    }

    const hassedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hassedPassword,
    });

    const token = jwt.sign({ user: user._id }, "Code_US", {
      expiresIn: "30d",
    });

    return res.status(201).json({ msg: "Registered successfully", token });
  }
}
