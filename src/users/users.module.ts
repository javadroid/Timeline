

import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { SessionSerialise } from './session.serialise';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [ AuthModule,UserModule],

  
  controllers: [UsersController],
  providers: [SessionSerialise],
  // 
})
export class UsersModule {}
