import { Module } from '@nestjs/common';
import { ParkingSpaceService } from './parking_space.service';
import { ParkingSpaceController } from './parking_space.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ParkingSpaceSchema } from './entities/parking_space.entity';

@Module({
  imports: [MongooseModule.forFeature([{name:'parking_space', schema:ParkingSpaceSchema}])],
  controllers: [ParkingSpaceController],
  providers: [ParkingSpaceService]
})
export class ParkingSpaceModule {}
