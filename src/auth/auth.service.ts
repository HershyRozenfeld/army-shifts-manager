import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) { }

    generateMockToken(): string {
        const payload = {
            username: 'test_user',
            role: 'commander',
        };
        return this.jwtService.sign(payload);
    }
}
