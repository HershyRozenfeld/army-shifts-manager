import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy/jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'a_super_secret_key_that_should_be_in_an_env_file',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy], // הוספנו את ה-Strategy
  exports: [AuthService], // חשוב לייצא את הסרביס כדי שיהיה זמין לשימוש במודולים אחרים
})
export class AuthModule {}