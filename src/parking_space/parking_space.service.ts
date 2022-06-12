import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateParkingSpaceDto } from './dto/create-parking_space.dto';
import { UpdateParkingSpaceDto } from './dto/update-parking_space.dto';
import { ParkingSpace } from './entities/parking_space.entity';

@Injectable()
export class ParkingSpaceService {

  constructor(@InjectModel('parking_space') private readonly parkings: Model<ParkingSpace>){}

  async create(createParkingSpaceDto: CreateParkingSpaceDto) {
    const newParkingSpace = new this.parkings(createParkingSpaceDto);
    // console.log(newParkingSpace);
    const result = await newParkingSpace.save()
    return result.id as string; 
  }

  async findAll() {
    const result = await this.parkings.find().exec();
    return result.map((space) => ({
      id:space.id, 
      created_at: space.created_at, 
      user_profile:space.user_profile, 
      description:space.description,
      photo:space.photo
    }));
  }

  async findOne(id: string) {
    const space = await this.find_space(id);
    return {
      id:space.id, 
      created_at: space.created_at, 
      user_profile:space.user_profile, 
      description:space.description,
      photo:space.photo
    };
  }

  async update(id: string, updateParkingSpaceDto: UpdateParkingSpaceDto) {
    const space = await this.find_space(id);
    let updated = Object.assign(space, updateParkingSpaceDto)
    console.log(updateParkingSpaceDto)
    updated.save()
    return updated;
  }

  async remove(id: string) {
    const result = await this.parkings.deleteOne({'_id':id}).exec();

        if (result.deletedCount === 0){
            throw new NotFoundException('Product not found');
        }
        return {success:true}
  }

  async find_space(id:string){
    let space;
    try {
      space = await this.parkings.findById(id).exec();
      } catch (error) {
      throw new NotFoundException('Could not find the mentioned parking space.');
      } 
      if (!space) {
      throw new NotFoundException('Could not find the mentioned parking space.');
      }
      return space;
  }
}
