import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FibanocciComponent } from './fibanocci/fibanocci.component';



const routes: Routes = [ 
  {path: '', redirectTo: '/fibanocci', pathMatch: 'full' },
  { path: 'fibanocci', component: FibanocciComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
