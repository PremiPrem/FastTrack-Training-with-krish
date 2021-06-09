import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindAnagramComponent } from './find-anagram/find-anagram.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { BackEndService } from './services/back-end.service';
import { FindWordOccuranceComponent } from './find-word-occurance/find-word-occurance.component';
import { FindLargestNumberComponent } from './find-largest-number/find-largest-number.component';

@NgModule({
  declarations: [
    AppComponent,
    FindAnagramComponent,
    NavigationBarComponent,
    FindWordOccuranceComponent,
    FindLargestNumberComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BackEndService],
  bootstrap: [AppComponent]
})
export class AppModule { }
