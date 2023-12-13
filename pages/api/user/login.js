import User from "../../../models/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import connectDB from "src/db";

export default async function Login(req, res) {
  if (req.method === "POST") {
    connectDB();
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "All the fields are mendatory" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Register First" });
    }

    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      return res.status(400).json({ msg: "Wrong username or password" });
    }
    const token = jwt.sign({ user: user._id }, "Code_US", {
      expiresIn: "30d",
    });
    return res.status(201).json({ msg: "Login successfully", token });
  }
}
