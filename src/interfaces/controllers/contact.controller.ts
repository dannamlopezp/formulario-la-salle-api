import { Request, Response } from 'express';
import { ContactUseCase } from '../../application/contact.usecase';

export const ContactController = {
  async contact(req: Request, res: Response) {
    try {
      const { userId, message } = req.body;
      const user = await ContactUseCase.contact(userId, message );
      res.status(201).json(user);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }
};
