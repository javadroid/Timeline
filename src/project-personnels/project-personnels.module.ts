import { Module } from '@nestjs/common';
import { ProjectPersonnelsController } from './project-personnels.controller';
import { ProjectPersonnelsService } from './project-personnels.service';

@Module({
  controllers: [ProjectPersonnelsController],
  providers: [ProjectPersonnelsService]
})
export class ProjectPersonnelsModule {}

