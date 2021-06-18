import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PetComponent } from './pet/pet.component';
import { PetOwnerComponent } from './pet-owner/pet-owner.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

// import {ModuleOfNgb} from '@ng-bootstrap/ng-bootstrap';  
// import { ModuleOfNg } from '@angular/core';  

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    PetComponent,
    PetOwnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,  
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
