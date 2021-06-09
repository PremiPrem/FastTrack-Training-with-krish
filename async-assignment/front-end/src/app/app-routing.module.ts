import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindAnagramComponent } from './find-anagram/find-anagram.component';
import { FindLargestNumberComponent } from './find-largest-number/find-largest-number.component';
import { FindWordOccuranceComponent } from './find-word-occurance/find-word-occurance.component';


const routes: Routes = [
  { path: '', redirectTo: '/find-anagram', pathMatch: 'full' },
  { path: 'find-anagram', component: FindAnagramComponent },
  { path: 'find-word-occurance', component: FindWordOccuranceComponent },
  { path: 'find-largest-number', component: FindLargestNumberComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
