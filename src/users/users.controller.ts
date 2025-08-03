import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    getUsers(): any[] {
        const users = [
            { id: 1, name: 'John Doe', role: 'soldier' },
            { id: 2, name: 'Jane Smith', role: 'commander' },
        ];
        return users;
    }
}
