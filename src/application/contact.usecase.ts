
import { measureMemory } from 'vm';
import { ContactRepo } from '../infrastructure/firestore/contact.repo';
import { v4 as uuidv4 } from 'uuid';

export const ContactUseCase = {
  async contact(userId: string, message: string) {
    const id = uuidv4();
console.log(message, 'me')
    await ContactRepo.create({ id, user_id: userId, message });
    return { id };
  },

  
};

