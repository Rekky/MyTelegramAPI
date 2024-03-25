import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

class TokenService {
  private secretKey = process.env.JWT_SECRET_KEY!;

  public generateAuthToken(userId: string): string {
    const token = jwt.sign({ userId }, this.secretKey, { expiresIn: '1h' });
    return token;
  }
  
  public verifyAuthToken(token: string): string | jwt.JwtPayload {
    try {
      return jwt.verify(token, this.secretKey);
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}

export default new TokenService();