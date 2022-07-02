import { Module } from '@nestjs/common';
import { LogController } from './log.controller';
import { LogService } from './log.service';
import { log, logSchema } from './schema/log.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:log.name, schema: logSchema}],)],
  controllers: [LogController],
  providers: [LogService]
})
export class LogModule {}
