
import { Controller, Post, Body, Get, Param ,Delete} from '@nestjs/common';
import { ActivityService } from './activity.service';
import { Createactivity } from './dto/createactivity.dto';

@Controller('activity')
export class ActivityController {
    constructor(private  activityService: ActivityService){}
    
    @Get('Id')
    async findOne(@Param('Id') Id: string) {
      return this.activityService.findOne(Id);
    }

    @Get()
    async getactivity() {
        return this.activityService.getactivity()
    }

    @Post()
    async create(@Body() createDto: Createactivity){
        return this.activityService.create(createDto)
    }

    @Delete(':Id')
    async delete(@Param('Id') Id: string) {
      return this.activityService.delete(Id);
    }


}
