import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ProjectPersonnelsService } from './project-personnels.service';

@Controller('project-personnels')
export class ProjectPersonnelsController {
    constructor(private  projectPersonnelsService: ProjectPersonnelsService){}

    // @Post()
    // addProjectPersonnels(
    // @Body('ProjectId')  project: string, 
    // @Body('UserId') user: string,
    // @Body('Personneltype') personnel: string,
    // ) {
    //  const generatedId = this.projectPersonnelsService.insertProjectPersonnelsModule(project, user, personnel);
    //  return {id: generatedId};
    // }
    @Get(':personnelId')
    async getProjectPersonnelsById(@Param('personnelId') personnelId: string) {
      return this.projectPersonnelsService.getProjectPersonnelsById(personnelId);
    }

    @Get()
    async getProjectPersonnels() {
        return this.projectPersonnelsService.getProjectPersonnels()
    }

    @Post()
    async createProjectPersonnels(@Body() createDto: CreateDto){
        await this.projectPersonnelsService.createProjectPersonnels(createDto.ProjectId,createDto.UserId,createDto.Personneltype)
    }
  

}
interface  CreateDto {
    personnelId: string,
    ProjectId: string,
    UserId: string,
    Personneltype: string,
}

