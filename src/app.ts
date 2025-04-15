import express from 'express';
import cors from 'cors';
import { router } from './interfaces/routes';
import './config/firebase'; // inicializa Firestore

const app = express();
app.use(express.json());
app.use('/api', router);
const whiteList = ['http://localhost:4200', 'https://formulario-la-salle.firebaseapp.com']
app.use(cors({
    origin: whiteList,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['X-Custom-Header', 'Authorization']
  }));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
