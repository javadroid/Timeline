

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';

import { Users, UsersSchema } from './schema/users.schema';
import { UsersController } from './users.controller';

import {PassportModule} from '@nestjs/passport'
import { Stratage } from './stratages/stratage';
import { SessionSerialise } from './session.serialise';
import { LocalAuthGuards } from './stratages/local-auth-guards';
import { Stratage2 } from './stratages/stratage2';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [ AuthModule,UserModule],

  
  controllers: [UsersController],
  providers: [SessionSerialise],
  // 
})
export class UsersModule {}
