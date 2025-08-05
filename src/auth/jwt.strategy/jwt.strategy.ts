import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'a_super_secret_key_that_should_be_in_an_env_file',
    });
  }

  async validate(payload: any) {
    // הפונקציה הזו תופעל אחרי אימות הטוקן
    // היא מחזירה את האובייקט שיוצמד ל-request.user
    return { userId: payload.sub, username: payload.username, role: payload.role };
  }
}