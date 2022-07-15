import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CreateLogs } from './dto/createlog.dto';

import { LogService } from './log.service';


@Controller('log')
export class LogController {
    constructor(private  logService: LogService){}


    @Get(':_Id')
    async findOne(@Param('_Id') projectId: string) {
      return this.logService.findOne(projectId);
    }

    @Get()
    async getlogs() {
        return this.logService.getlogs()
    }

    @Post()
    async create(@Body() createDto: CreateLogs){
        return this.logService.create(createDto)


   
}

@Delete(':Id')
async delete(@Param('Id') Id: string) {
    return this.logService.delete(Id);
}
}
