import { db } from '../../config/firebase';
import { Student } from '../../domain/student';

const collection = db.collection('students');

export const StudentRepo = {
  async create(student: Student) {
    await collection.doc(student.id).set(student);
  },
  async findByEmail(email: string): Promise<Student | null> {
    const snapshot = await collection.where('email', '==', email).get();
    if (snapshot.empty) return null;
    return snapshot.docs[0].data() as Student;
  }
};
