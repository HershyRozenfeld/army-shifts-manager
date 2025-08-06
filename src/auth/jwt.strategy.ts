import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'a_super_secret_key_that_should_be_in_an_env_file',
    });
  }

  async validate(payload: any) {
    // הפונקציה הזו תופעל אחרי אימות הטוקן
    // נשתמש ב-UsersService כדי למצוא את המשתמש
    return this.usersService.findOneById(payload.sub);
  }
}
