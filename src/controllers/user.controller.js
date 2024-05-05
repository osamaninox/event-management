import { User } from "../schemas/user.schema.js";
import jwt from 'jsonwebtoken';

export async function login(req, res, next) {
  const { email, password } = req.body;

  // Find user by email
  const user = await User.findOne({ email: email }).lean();

  // Check if user exists and password matches (for simplicity, not recommended in production)
  if (user && user.password === password) {
    // Create a JWT token
    const token = jwt.sign(
      { email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    Object.assign(user, { token });
    return res
      .status(200)
      .json({ message: "Login successful", user });
  }

  res.status(401).json({ message: "Invalid credentials" });
}

export async function register(req, res, next) {
  const { email, password, name, contactNumber } = req.body;

  const userWithEmailAlreadyExists = await User.exists({ email: email });
  if (userWithEmailAlreadyExists) {
    return res.status(400).json({ message: "User with email already exists" });
  }

  const newUser = { email, password, name, contactNumber };
  await User.create(newUser);

  res
    .status(201)
    .json({ message: "User registered successfully", user: newUser });
}

export async function updateProfile(req, res, next) {
  const { id } = req.params;
  const { email, password, name, contactNumber } = req.body;

  const updatedUser = await User.findByIdAndUpdate({ id }, { email, password, name, contactNumber }).lean();
  res
    .status(200)
    .json(updatedUser);
}

export async function getProfile(req, res, next) {
  const { id } = req.params;
  try {
    const user = await User.findById(id).lean();
    if (!user) {
      return res.status(400).json({ message: "Invalid user id" });
    }
    res
      .status(200)
      .json(user);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
  }
}