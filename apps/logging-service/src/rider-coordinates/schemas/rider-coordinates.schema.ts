import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RiderCoordinatesDocumant = HydratedDocument<RiderCoordinates>;

@Schema()
export class RiderCoordinates {
  @Prop({ required: true })
  lat: number;

  @Prop({ required: true })
  lng: number;

  @Prop({ required: true })
  riderId: number;
}

export const RiderCoordinatesSchema =
  SchemaFactory.createForClass(RiderCoordinates);
