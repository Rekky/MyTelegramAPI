import { Request, Response } from 'express';
import AuthService from '../services/authService';
import TokenService from '../services/tokenService';

const generateToken = (req: Request, res: Response) => {
    const { username, password } = req.body;
    
    const isAuthenticated = AuthService.authenticate(username, password);

    if(isAuthenticated) {
        const userId = process.env.USERID as string; 
        try {
            const token = TokenService.generateAuthToken(userId);
            res.json({ token });
        } catch (error) {            
            res.status(500).send({ message: "Error generating token" });
        }
    } else {
        res.status(401).send('Invalid username or password');
    }    
};

export default {
    generateToken
};
