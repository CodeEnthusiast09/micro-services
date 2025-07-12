import { Controller } from '@nestjs/common';
import { RiderServiceService } from './rider-service.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('rider')
export class RiderServiceController {
  constructor(private readonly riderServiceService: RiderServiceService) {}

  // @Get('id')
  @MessagePattern({ cmd: 'get-rider' })
  async getRiderById(data: any) {
    return Promise.resolve({
      _id: data.id,
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'janedoe@email.com',
    });
  }
}
