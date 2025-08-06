import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    private users = [
    { id: 1, name: 'John Doe', email: 'john.doe@army.com', password: '$2b$10$32rK62D4.jN7d1P6oG3e2O.R7pM4H7U7.T1n9P6G9V4P3e5M9E4X7Q3.', role: 'soldier' }, // 'password123'
    { id: 2, name: 'Jane Smith', email: 'jane.smith@army.com', password: '$2b$10$9G2W6V6X4V5V8Q1X4N1C5H8B5.T6B6Z8V2A9L2E4R8Y7H1R7X5.', role: 'commander' }, // 'password456'
  ];

  findAll(): any[] {
    return this.users;
  }

  findOneByEmail(email: string): any {
    return this.users.find(user => user.email === email);
  }

  findOneById(id: number): any {
    return this.users.find(user => user.id === id);
  }
}