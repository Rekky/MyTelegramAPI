import { Request, Response } from 'express';
import TelegramBot from 'node-telegram-bot-api';

const botToken = process.env.TELEGRAM_TOKEN!;
const bot = new TelegramBot(botToken, { polling: true });
bot.sendMessage(process.env.TELEGRAM_CHANNEL_1 as string, '🚀 MyTelegram API UP');

const sendMessage = async (req: Request, res: Response) => {
  const { chatId, message } = req.body;

  try {    
    const response = await bot.sendMessage(chatId, message);
    res.json({ success: true, response });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ success: false, error: 'Failed to send message' });
  }
};

export default {
  sendMessage
};