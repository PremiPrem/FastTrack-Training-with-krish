import * as mongoose from 'mongoose';

export const petsSchema = new mongoose.Schema({
    petName: String,
    petAuthorName:String,
    breed:String,
    dob:String,
    breedAddress: String
},{
    versionKey:false
});  