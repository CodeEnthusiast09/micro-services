import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCoordinatesDto } from './dtos/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(private readonly coordinateService: RiderCoordinatesService) {}

  @Get(':id')
  getRiderCoordinates(@Param() params: any) {
    return this.coordinateService.getRiderCoordinates(params.id);
  }

  @Post()
  saveRiderCoordinates(@Body() createCoordinatesDto: CreateCoordinatesDto) {
    return this.coordinateService.saveRiderCoordinates(createCoordinatesDto);
  }
}
