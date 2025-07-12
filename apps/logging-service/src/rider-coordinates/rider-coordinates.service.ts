import { Inject, Injectable } from '@nestjs/common';
import { CreateCoordinatesDto } from './dtos/create-coordinates.dto';
import { Model } from 'mongoose';
import { RiderCoordinates } from './schemas/rider-coordinates.schema';
import { InjectModel } from '@nestjs/mongoose';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RiderCoordinatesService {
  constructor(
    @InjectModel(RiderCoordinates.name)
    private readonly riderCoordinateModel: Model<RiderCoordinates>,
    @Inject('RIDER_SERVICE') private client: ClientProxy,
  ) {}

  async saveRiderCoordinates(createCoordinatesDto: CreateCoordinatesDto) {
    return await this.riderCoordinateModel.create(createCoordinatesDto);
  }

  async getRiderCoordinates(riderId: number) {
    const coordinates = await this.riderCoordinateModel.find({
      riderId: riderId,
    });

    const pattern = { cmd: 'get-rider' };

    const payload = { id: riderId };

    const rider: any = await firstValueFrom(this.client.send(pattern, payload));

    return { coordinates, rider };
  }
}
