import { Router, Request, Response } from 'express';
import authController from '../controllers/authController';
import messageController from '../controllers/messageController';
import authMiddleware from '../middleware/authMiddleware';
import { validateSchema } from '../middleware/validateMiddleware';
import { messageSchema } from '../validators/messagesSchema';

const router = Router();

router.get('/', (req: Request, res: Response) => {res.status(200).send('API Works')});
router.post('/login', authController.generateToken);
router.post('/send', [authMiddleware, validateSchema(messageSchema)], messageController.sendMessage);

export default router;