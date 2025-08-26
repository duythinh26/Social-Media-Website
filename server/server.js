import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/db.js';
import { serve } from "inngest/express";
import { inngest, functions } from './inngest/index.js';

const app = express();

const PORT = process.env.PORT || 5000;

await connectDB();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Server is running");
})

app.use("/api/inngest", serve({ client: inngest, functions }));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})