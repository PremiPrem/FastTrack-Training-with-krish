import { Controller , Get, Post, Body, Delete, Param, Put, Patch, HttpCode } from '@nestjs/common';
import { PetsService } from './pets.service';

@Controller('api')
export class PetsController {

    constructor(private service:PetsService){}
    @Get('allPetsList')
    getAllPets(){
        return  this.service.getAll();
    }

    @Post('addPets')
   addPet(@Body() pets:any){
        console.log(pets);
      return this.service.addPetDetails(pets);
    }

    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id') id: string) {
      return this.service.deletePet(id);
    }

    @Get('petById/:id')
    getPetDetailById(@Param('id') id: string){
      // return id;
        return  this.service.getPetDetailById(id);
    }
   

    @Patch(':id/update')
    update(@Param('id') id, @Body() pets: any){
        // pets.id= Number(id);
        // return pets;
        // console.log('Update #' + contactData.id)
        return this.service.update(id,pets);
    }  

  //   @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

}
