import { Controller, Post, Body, Get, Param ,Delete} from '@nestjs/common';
import { ActivityAssignmentService } from './activity-assignment.service';

import { createactivityassignment } from './dto/createactivityassignment.dto';


@Controller('activityassignment')
export class ActivityAssignmentController {
    constructor(private  http: ActivityAssignmentService){}

    @Get('Id')
    async findOne(@Param('Id') Id: string) {
      return this.http.findOne(Id);
    }

    @Get()
    async getactivityassignment() {
        return this.http.getactivityassignment()
    }

    @Post()
    async createactivityassignment(@Body() createDto: createactivityassignment){
        await this.http.createactivityassignment(createDto)
    }

    @Delete(':Id')
    async delete(@Param('Id') Id: string) {
      return this.http.delete(Id);
    }

}
