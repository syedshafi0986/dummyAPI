import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';


const app = express();
const PORT = 3000;
import { router as dummyrouter  } from './routes/dummyRoutes.js';
import { AppRouter } from './routes/StoreRoute.js';
import { pdfRouter } from './routes/pdfRoute.js';

// Middleware
app.use(express.json());
app.use("/api",dummyrouter)
app.use('/api',AppRouter)
app.use("/api",pdfRouter)

app.get('/', (req, res) => res.send('API is working'));

mongoose.connect('mongodb://localhost:27017/dummyApi')
  .then(() => console.log('Connected to DB'))
  .catch(err => console.error('Failed to connect to DB', err));


app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
