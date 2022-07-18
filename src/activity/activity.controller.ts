
import { Controller, Post, Body, Get, Param ,Delete, Patch} from '@nestjs/common';
import { ActivityService } from './activity.service';
import { Createactivity } from './dto/createactivity.dto';

@Controller('activity')
export class ActivityController {
    constructor(private  activityService: ActivityService){}
    
    @Get('Id')
    async findOne(@Param('Id') Id: string) {
      return this.activityService.findOne(Id);
    }

    @Get('p/:Id')
    async findOneP(@Param('Id') Id: string) {
      return this.activityService.findOneP(Id);
    }

    @Get('p/:_id/:project')
    async findOnePid(@Param('_id') Id: string, @Param('project') p: string) {
      return this.activityService.findOnePid(Id,p);
    }

    @Patch(':_id')
    async update(@Param('_id') _Id: string, @Body() createDto: Createactivity) {
        return this.activityService.update(_Id, createDto);
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
