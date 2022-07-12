import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { Users, UsersSchema } from '../schema/users.schema';
import { UserService } from './user.service';


@Module({
  imports:[MongooseModule.forFeature([{name:Users.name, schema: UsersSchema,
  }],)],
  providers: [UserService,JwtService],
  exports: [UserService],
})
export class UserModule {}
