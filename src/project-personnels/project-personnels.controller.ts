import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { Personnel } from './project-personnel.model';
import { ProjectPersonnelsService } from './project-personnels.service';

@Controller('project-personnels')
export class ProjectPersonnelsController {
    constructor(private readonly projectPersonnelsService: ProjectPersonnelsService){}

    @Post()
    addProjectPersonnels(
    @Body('ProjectId') project: string, 
    @Body('UserId') user: string,
    @Body('Personneltype') personnel: string,
    ) {
     const generatedId = this.projectPersonnelsService.insertProjectPersonnelsModule(project, user, personnel);
     return {id: generatedId};
    }

    @Get()
    getAllPersonnels() {
        return this.projectPersonnelsService.getPersonnels(); 
    }
    
    @Get(':id')
    getPersonnel(@Param('id') PersonnelId: string,) {
        return this.projectPersonnelsService.getSinglePersonnel(PersonnelId);
    }

    @Patch(':id')
    updatePersonnel(    
    @Param('id') PersonnelId: string, 
    @Body('ProjectId') project: string, 
    @Body('UserId') user: string, 
    @Body('Personneltype') personnel: string,
    ) {

      this.projectPersonnelsService.updatePersonnel(PersonnelId, project, user, personnel);
      return null;
    }

    @Delete(':id')
    removePersonnel(@Param('id') PersonnelId: string) {
        this.projectPersonnelsService.deletePersonnel(PersonnelId);
    }

}
