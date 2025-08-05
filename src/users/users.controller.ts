import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/guards/roles/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('users')
export class UsersController {
    @Get()
    @Roles('commander') // רק מפקדים יכולים לגשת לראוט הזה
    @UseGuards(AuthGuard('jwt'), RolesGuard) // הפעלה של שני ה-Guards
    getUsers(): any[] {
        const users = [
            { id: 1, name: 'John Doe', role: 'soldier' },
            { id: 2, name: 'Jane Smith', role: 'commander' },
        ];
        return users;
    }
}
