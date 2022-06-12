import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParkingSpaceService } from './parking_space.service';
import { CreateParkingSpaceDto } from './dto/create-parking_space.dto';
import { UpdateParkingSpaceDto } from './dto/update-parking_space.dto';

@Controller('parking-space')
export class ParkingSpaceController {
  constructor(private readonly parkingSpaceService: ParkingSpaceService) {}

  @Post()
  async create(@Body() createParkingSpaceDto: CreateParkingSpaceDto) {
    const id = await this.parkingSpaceService.create(createParkingSpaceDto);
    return {"id":id}
  }

  @Get()
  findAll() {
    return this.parkingSpaceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parkingSpaceService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateParkingSpaceDto: UpdateParkingSpaceDto) {
    return await this.parkingSpaceService.update(id, updateParkingSpaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parkingSpaceService.remove(id);
  }
}
