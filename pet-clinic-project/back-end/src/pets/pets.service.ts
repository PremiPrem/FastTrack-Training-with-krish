import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Pets} from './model/pets.model';


@Injectable()
export class PetsService {
    constructor(@InjectModel('Pets') private readonly petsModel: Model<Pets>){}

    async getAll(){
    return await this.petsModel.find();
    }

    async addPetDetails(pets){
        const createPets = new this.petsModel(pets);
        await createPets.save();
      }
     
    async getPetDetailById(id: any){
      // return id;
      return await this.petsModel.find({_id :id});
      }
      
     async deletePet(id) {
            return await this.petsModel.remove({_id :id});
        }


    async update(id,pets) {
      // return id;
          return await this.petsModel.updateOne({_id : id}, pets);
      }
       

      
}
