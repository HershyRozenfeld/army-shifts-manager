import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';   

@Controller('auth')
export class AuthController { 
    constructor(private readonly authService: AuthService) {}

    @Get('login')
    login(): { token: string } {
        const token = this.authService.generateMockToken();
        return { token };
    }
}
