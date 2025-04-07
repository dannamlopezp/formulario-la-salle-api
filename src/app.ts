import express from 'express';
import { router } from './interfaces/routes';
import './config/firebase'; // inicializa Firestore

const app = express();
app.use(express.json());
app.use('/api', router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
