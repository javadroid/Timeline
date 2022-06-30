import { Injectable, NotFoundException } from '@nestjs/common';

import { Personnel } from './project-personnel.model';

@Injectable()
export class ProjectPersonnelsService {
    private personnel: Personnel[] = [];

    insertProjectPersonnelsModule(project: string, user: string, personnel: string) {
        const personnelId = Math.random().toString();
        const newPersonnel = new Personnel(personnelId, project, user, personnel)
        this.personnel.push(newPersonnel);
        return personnelId;
    }

    getPersonnels() {
        return [...this.personnel];
    }

    getSinglePersonnel(PersonnelId: string) {
        const personnel = this.findPersonnel(PersonnelId)[0];
        return { ...personnel };
    }

    updatePersonnel(PersonnelId: string, project: string,  user: string, personnel: string) {
        const [Personnel, index] = this.findPersonnel(PersonnelId);
        const updatedPersonnel = {...Personnel};
        if (project) {
            updatedPersonnel.ProjectId = project;
        }
        if (user) {
            updatedPersonnel.UserId= user;
        }
        if (personnel) {
            updatedPersonnel.Personneltype = personnel;
        }
        this.personnel[index] = updatedPersonnel;
    }


    private findPersonnel(id: string): [Personnel, number] {
        const personnelIndex = this.personnel.findIndex((person) => person.id === id);
        const personnel = this.personnel[personnelIndex];
        if (!personnel) {
            throw new NotFoundException('could not find product');
        }
        return [personnel, personnelIndex];
    }

    deletePersonnel(PersonnelId: string) {
        const index = this.findPersonnel(PersonnelId) [1];
        this.personnel.splice(index, 1);
    }
}
