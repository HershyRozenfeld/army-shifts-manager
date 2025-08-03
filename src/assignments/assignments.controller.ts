import { Controller, Get } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
    @Get()
    getAssignments(): any[] {
        const assignments = [
            { id: 1, userId: 1, shiftId: 1 },
            { id: 2, userId: 2, shiftId: 2 },
        ];
        return assignments;
    }
}
