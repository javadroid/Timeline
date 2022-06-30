import { Injectable } from '@nestjs/common';

import { Personnel } from './project-personnel.model';

@Injectable()
export class ProjectPersonnelsService {
    personnel: Personnel[] = [];

    insertProjectPersonnelsModule(project: string, user: string, personnel: string) {
        const personnelId = new Date().toString();
        const newPersonnel = new Personnel(personnelId, project, user, personnel)
        this.personnel.push(newPersonnel);
        return personnelId;
    }
}
