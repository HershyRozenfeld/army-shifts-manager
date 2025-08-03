import { Controller, Get } from '@nestjs/common';

@Controller('shifts')
export class ShiftsController {
    @Get()
    getShifts(): any[] {
        const shifts = [
            { id: 1, location: 'gate 1', startTime: new Date(), endTime: new Date() },
            { id: 2, location: 'tower 3', startTime: new Date(), endTime: new Date() },
        ];
        return shifts;
    }
}
