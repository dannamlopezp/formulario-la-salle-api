import express from 'express';
const cors = require('cors');
import { router } from './interfaces/routes';
import './config/firebase'; // inicializa Firestore

const app = express();
const whiteList = ['http://localhost:4200', 'https://formulario-la-salle.firebaseapp.com', 'https://formulario-la-salle.web.app']
app.use(cors({
    origin: whiteList,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use('/api', router);
const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`Server running on port ${port}`)});
