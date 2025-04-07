import { Request, Response } from 'express';
import { AuthUseCase } from '../../application/auth.usecase';
import { StudentRegisterRequestDto } from '../../infrastructure/dto/student-register-request.dto';

export const AuthController = {
  async register(req: Request, res: Response) {
    try {
      const dataRegister: StudentRegisterRequestDto = req.body;
      const user = await AuthUseCase.register(dataRegister);
      res.status(201).json(user);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const result = await AuthUseCase.login(email, password);
      res.json(result);
    } catch (err: any) {
      res.status(401).json({ error: err.message });
    }
  }
};
