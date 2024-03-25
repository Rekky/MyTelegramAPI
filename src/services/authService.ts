import dotenv from 'dotenv';

dotenv.config();

class AuthService {
    private expectedUsername = process.env.EXPECTED_USERNAME;
    private expectedPassword = process.env.EXPECTED_PASSWORD;
  
    public authenticate(username: string, password: string): boolean {      
      return username === this.expectedUsername && password === this.expectedPassword;
    }
}

export default new AuthService();