import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Stratage } from '../stratages/stratage';
import { Stratage2 } from '../stratages/stratage2';
import { UserModule } from '../user/user.module';
import { jwtConstants } from './auth.constant';
import { AuthService } from './auth.service';


@Module({
    imports: [
      UserModule,
      PassportModule,
      JwtModule.register({
        secret:jwtConstants.secret,
        signOptions: { expiresIn: '60s' },
      }),
    ],
    providers: [AuthService, Stratage, Stratage2],
    exports: [AuthService],
  })
  export class AuthModule {}
