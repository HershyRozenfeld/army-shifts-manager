import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'John Doe', email: 'john.doe@army.com', password: 'password123', role: 'soldier' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@army.com', password: 'password456', role: 'commander' },
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