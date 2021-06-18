import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { petsSchema } from './pets/schema/pets.schema';
import { PetsController } from './pets/pets.controller';
import { PetsService } from './pets/pets.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name:'Pets',
      schema:petsSchema,
      collection:'Pets'
    }]),
    MongooseModule.forRoot('mongodb+srv://user1:jeyantha5@cluster0.cuw6v.mongodb.net/pet?retryWrites=true&w=majority'),
    ],
  controllers: [AppController,PetsController],
  providers: [AppService,PetsService],
})
export class AppModule {}
