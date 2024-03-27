import { Router, Request, Response } from 'express';
import authController from '../controllers/authController';
import messageController from '../controllers/messageController';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

router.get('/', (req: Request, res: Response) => {res.status(200).send('API Works')});
router.post('/generate-token', authController.generateToken);
router.post('/send', authMiddleware, messageController.sendMessage);

export default router;