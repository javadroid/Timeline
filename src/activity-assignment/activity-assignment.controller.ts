import { Controller, Post, Body, Get, Param ,Delete, Patch} from '@nestjs/common';
import { ActivityAssignmentService } from './activity-assignment.service';

import { createactivityassignment } from './dto/createactivityassignment.dto';


@Controller('activityassignment')
export class ActivityAssignmentController {
    constructor(private  http: ActivityAssignmentService){}

    @Get(':Id')
    async findOne(@Param('Id') Id: string) {
      return this.http.findOne(Id);
    }
    @Get('activity/:activity')
    async findActivityAssign(@Param('activity') Id: string) {
      return this.http.findActivityAssign(Id);
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

    
    @Patch(':_id')
    async update(@Param('_id') _Id: string, @Body() updated: createactivityassignment) {
        return this.http.update(_Id, updated);
    }

}
