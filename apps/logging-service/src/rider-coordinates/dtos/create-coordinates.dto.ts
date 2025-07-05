import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCoordinatesDto {
  @IsNotEmpty()
  @IsNumber()
  lat: number;

  @IsNotEmpty()
  @IsNumber()
  lng: number;

  @IsNotEmpty()
  @IsNumber()
  riderId: number;
}
