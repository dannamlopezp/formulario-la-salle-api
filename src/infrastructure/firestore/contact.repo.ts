import { db } from '../../config/firebase';
import { Contact } from '../../domain/contact';

const collection = db.collection('contacts');

export const ContactRepo = {
  async create(contact: Contact) {
    await collection.doc(contact.id).set(contact);
  }
};
