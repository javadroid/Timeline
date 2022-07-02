export class Logs {
    constructor (
       public id: string,
       public projectId: string,
       public ActivityId: string,
       public UserId: string,
       public Bug: string,
       public ReporterId: string,
       public ReportedAt: any,
       public AssignedTo: string,
       public DateResolved: any,
       public Response: string,
       public ResponseConfirm: string,
       public ResponseConfirmDate: string,
    ) {}
}