import { MongooseModule,} from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ActivityAssignmentController } from './activity-assignment.controller';
import { ActivityAssignmentService } from './activity-assignment.service';
import { activityassignment, activityassignmentSchema } from './activityassignment.schema';



@Module({

  imports: [MongooseModule.forFeature([{name:activityassignment.name, schema:activityassignmentSchema}],)],
  controllers: [ActivityAssignmentController],
  providers: [ActivityAssignmentService,]
})
export class ActivityAssignmentModule {}
