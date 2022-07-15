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
      PassportModule.register({session:true}),
      JwtModule.register({
        secret:jwtConstants.secret,
        signOptions: { expiresIn: '24h' },
      }),
    ],
    providers: [AuthService, Stratage, Stratage2],
    exports: [AuthService],
  })
  export class AuthModule {}
