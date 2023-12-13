import User from "../../../models/user-model";
import bcypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function Login(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "All the fields are mendatory" });

    }
    const isMatched = await
  }
}
