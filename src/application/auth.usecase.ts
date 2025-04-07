import { StudentRepo } from '../infrastructure/firestore/student.repo';
import { JwtService } from '../infrastructure/jwt/jwt.service';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import { StudentRegisterRequestDto } from '../infrastructure/dto/student-register-request.dto';
import { LoginResponseDto } from '../infrastructure/dto/login-response.dto';
import { Student } from '../domain/student';

export const AuthUseCase = {
  async register(dto: StudentRegisterRequestDto) {
    
    const existing = await StudentRepo.findByEmail(dto.email);
    if (existing) throw new Error('User already exists');
    
    const hashed = await bcrypt.hash(dto.password, 10);
    const id = uuidv4();
    console.log(dto, 'hola')
    const student : Student = {
      id: id, email: dto.email, password: hashed, name: dto.name, last_name: dto.lastName, phone_number: dto.phoneNumber
    }
    console.log('stu', student)
    await StudentRepo.create(student);
    return { id };
  },

  async login(email: string, password: string) {
    const student = await StudentRepo.findByEmail(email);
    if (!student) throw new Error('Invalid credentials');

    const match = await bcrypt.compare(password, student.password);
    if (!match) throw new Error('Invalid credentials');

    const token = JwtService.generate({ id: student.id, email: student.email });
    const data: LoginResponseDto = {
      id: student.id,
      email: student.email,
      phoneNumber: student.phone_number,
      name: student.name,
      lastName: student.last_name,
      token: token
    }
    return data;
  }
};