import { Module } from '@nestjs/common';
import { ProjectPersonnelsController } from './project-personnels.controller';
import { ProjectPersonnels, ProjectPersonnelsSchema } from './schema/project-personnels.schema';
import { ProjectPersonnelsService } from './project-personnels.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
imports: [MongooseModule.forFeature([{name:ProjectPersonnels.name, schema: ProjectPersonnelsSchema}],)],
  controllers: [ProjectPersonnelsController,],
  providers: [ProjectPersonnelsService,]
})
export class ProjectPersonnelsModule {}

