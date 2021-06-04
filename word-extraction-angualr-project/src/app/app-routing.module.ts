import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindWordCountComponent } from './find-word-count/find-word-count.component';

const routes: Routes = [{path: '', redirectTo: '/findwordcount', pathMatch: 'full' },
{ path: 'findwordcount', component: FindWordCountComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
