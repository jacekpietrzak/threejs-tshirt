import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

import dalleRoutes from './routes/dalle.routes.js';

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/dalle', dalleRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from DALL.E' });
});

const PORT = 8080;

app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
