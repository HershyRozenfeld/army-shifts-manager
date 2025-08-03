import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [ 
    JwtModule.register({
      secret: 'a_super_secret_key_that_should_be_in_an_env_file',
      signOptions: { expiresIn: '5m'},
    })
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
