import { Router } from 'express';
import { AuthController } from './controllers/auth.controller';
import { ContactController } from './controllers/contact.controller';
import { authenticateJWT } from './middleware/auth.middleware';

export const router = Router();

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.post('/contact', authenticateJWT, ContactController.contact);