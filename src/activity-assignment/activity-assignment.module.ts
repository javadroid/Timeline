import { Module } from '@nestjs/common';
import { ActivityAssignmentController } from './activity-assignment.controller';
import { ActivityAssignmentService } from './activity-assignment.service';

@Module({
  controllers: [ActivityAssignmentController],
  providers: [ActivityAssignmentService]
})
export class ActivityAssignmentModule {}
