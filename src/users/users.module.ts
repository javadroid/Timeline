

import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { SessionSerialise } from './session.serialise';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RoleGuard } from './roles/role.guard';


@Module({
  imports: [ AuthModule,UserModule],

  
  controllers: [UsersController],
  providers: [SessionSerialise,{provide:APP_GUARD,useClass:RoleGuard}],
  // 
})
export class UsersModule {}
