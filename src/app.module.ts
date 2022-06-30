import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { ProjectPersonnelsModule } from './project-personnels/project-personnels.module';
import { UsersModule } from './users/users.module';
import { ActivityModule } from './activity/activity.module';
import { ActivityAssignmentModule } from './activity-assignment/activity-assignment.module';
import { LogModule } from './log/log.module';
import { ActivityAssignmentController } from './activity-assignment/activity-assignment.controller';
import { ActivityAssignmentService } from './activity-assignment/activity-assignment.service';

@Module({
  imports: [ProjectModule, ProjectPersonnelsModule, UsersModule, ActivityModule, ActivityAssignmentModule, LogModule],
  controllers: [AppController, ActivityAssignmentController],
  providers: [AppService, ActivityAssignmentService],
})
export class AppModule {}
