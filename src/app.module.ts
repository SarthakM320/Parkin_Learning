import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParkingSpaceModule } from './parking_space/parking_space.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ParkingSpaceModule, 
    MongooseModule.forRoot(
      'mongodb+srv://sarthakm320:sarthak200221@cluster0.r41vy.mongodb.net/parkin'
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
