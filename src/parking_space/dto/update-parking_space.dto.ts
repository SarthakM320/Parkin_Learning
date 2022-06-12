import { PartialType } from '@nestjs/mapped-types';
import { CreateParkingSpaceDto } from './create-parking_space.dto';

export class UpdateParkingSpaceDto extends PartialType(CreateParkingSpaceDto) {
    readonly id:string;
    readonly user_profile:string;
    readonly photo:URL;
    readonly description:string;
    
}
