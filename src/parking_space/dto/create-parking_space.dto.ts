import { ArrayMinSize, IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';


export class CreateParkingSpaceDto {
    @IsString()
    @IsNotEmpty()
    user_profile: string;
    // location: {};

    @IsNotEmpty()
    photo: URL;

    @IsOptional()
    description: string;
}
