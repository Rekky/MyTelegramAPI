import { Router } from 'express';
import authController from '../controllers/authController';
import messageController from '../controllers/messageController';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

router.post('/generate-token', authController.generateToken);
router.post('/send', authMiddleware, messageController.sendMessage);

export default router;