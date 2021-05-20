import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

@Controller('erik')
export class ErikController {
  @Get('/blue')
  @ApiResponse({ status: 200, description: 'Get Info.' })
  getHello(): string {
    return 'hi';
  }
}
