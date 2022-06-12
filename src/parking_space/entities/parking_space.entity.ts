import * as mongoose from "mongoose";

export const ParkingSpaceSchema = new mongoose.Schema({
    user_profile: {type: String, required: true},
    //location
    photo: {type:String, required: true},
    created_at: {type:Date, required: true, default: Date.now},
    description: {type:String, required: true}
})

export interface ParkingSpace extends mongoose.Document {
    id: string;
    user_profile: string;
    // location: {};
    photo: URL;
    created_at: Date;
    description: string;
}
