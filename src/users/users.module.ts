

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { sign } from 'crypto';
import { Users, UsersSchema } from './schema/users.schema';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {PassportModule} from '@nestjs/passport'
import { Stratage } from './stratage';
import { SessionSerialise } from './session.serialise';
import { LocalAuthGuards } from './local-auth-guards';


@Module({
  imports: [JwtModule.register({
    secret:'secretkey',
    signOptions:{expiresIn:'1hr'}
  })
    ,MongooseModule.forFeature([{name:Users.name, schema: UsersSchema,
    }],),PassportModule.register({session:true}),],

  
  controllers: [UsersController],
  providers: [UsersService,Stratage,SessionSerialise,LocalAuthGuards],
  // 
})
export class UsersModule {}
