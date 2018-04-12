import { Component } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import {HttpSupportService} from './http-support.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 styleUrls: ['./app.component.css'],
providers :[HttpSupportService]
 
})
export class AppComponent implements OnInit{
  name='';
  
ngOnInit()
{
  
}
}
