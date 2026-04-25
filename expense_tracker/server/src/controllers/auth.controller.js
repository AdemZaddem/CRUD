import { getUser, createUser } from "../services/auth.service.js";
import bcrypt from "bcrypt";

export async function createUserController(req, res) {
  try {
    const { username, email, password } = req.body;
    const auth = await createUser(username, email, password);
    res.status(201).json({ message: "Account created successfuly" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getUserController(req, res) {
  try {
    const { email, password } = req.body;
    const errorMessage = { message: "email or password incorrect" };
    const auth = await getUser(email);
    if (!auth) return res.status(400).json(errorMessage);
    const isMatch = await bcrypt.compare(password, auth.password);
    if (!isMatch) return res.status(400).json(errorMessage);

    return res
      .status(201)
      .json({
        message: `Welcome back ${auth.username}`,
        user: { id: auth.id, username: auth.username, email: auth.email,avatar:auth.avatar },
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
