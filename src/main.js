import express from 'express';
import { connect } from 'mongoose';
import router from './router.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

console.log(`Connecting database at: mongodb://${process.env.MONGODB_URL}:${process.env.MONGODB_PORT}/event-management`);
connect(`mongodb://${process.env.MONGODB_URL}:${process.env.MONGODB_PORT}/event-management`);

// Routes
app.use('/api', router);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});