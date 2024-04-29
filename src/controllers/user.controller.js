import { User } from "../schemas/user.schema.js";

export async function login(req, res, next) {
  const { email, password } = req.body;

  // Find user by email
  const user = await User.findOne({email: email});

  // Check if user exists and password matches (for simplicity, not recommended in production)
  if (user && user.password === password) {
    return res
      .status(200)
      .json({ message: "Login successful", user });
  }

  res.status(401).json({ message: "Invalid credentials" });
}

export async function register(req, res, next) {
  const { email, password } = req.body;

  const userWithEmailAlreadyExists = await User.exists({ email: email });
  if (userWithEmailAlreadyExists) {
    return res.status(400).json({ message: "User with email already exists" });
  }

  // For simplicity, storing password in plain text. In production, use bcrypt for password hashing.
  const newUser = { email, password };
  await User.create(newUser);

  res
    .status(201)
    .json({ message: "User registered successfully", user: newUser });
}
