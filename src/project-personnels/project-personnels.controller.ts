import { Controller, Post, Body } from '@nestjs/common';
import { ProjectPersonnelsService } from './project-personnels.service';

@Controller('project-personnels')
export class ProjectPersonnelsController {
    constructor(private readonly projectPersonnelsService: ProjectPersonnelsService){}

    @Post()
    addProjectPersonnels(
    @Body('ProjectId')  project: string, 
    @Body('UserId') user: string,
    @Body('Personneltype') personnel: string,
    ) {
     const generatedId = this.projectPersonnelsService.insertProjectPersonnelsModule(project, user, personnel);
     return {id: generatedId};
    }
}
