import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinatesDto } from './dtos/create-coordinates.dto';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  @Get()
  getRiderCoordinates() {
    return 'Hello, rider is here';
  }

  @Post(@Body() createCoordinatesDto: CreateCoordinatesDto )
  saveRiderCoordinates() {

  }
}
