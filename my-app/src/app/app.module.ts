import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpSupportService} from  './http-support.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { Http } from '@angular/http';
// import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [HttpSupportService],
  bootstrap: [AppComponent]
})
export class AppModule {
 
  constructor()
  {

  }

 
 }
