import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetOwnerComponent } from './pet-owner/pet-owner.component';
import { PetComponent } from './pet/pet.component';



const routes: Routes = [
  { path: '', redirectTo: '/pet', pathMatch: 'full' },
  { path: 'pet', component: PetComponent },
  { path: 'pet-owner', component: PetOwnerComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
