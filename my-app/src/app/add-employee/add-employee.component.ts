import { Component } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import {HttpSupportService} from '../http-support.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employees:Array<any>;
  submitted:boolean;
  public employeeForm:FormGroup;
  constructor(private httpService:HttpSupportService,private _fb:FormBuilder){
    this.employeeForm=this._fb.group({
     empId: [null, Validators.required],
      firstName: [null, Validators.required],
      lastname: [null, Validators.required],
      active: [null, Validators.required]
    });


  }
onClick()
{
  this.httpService.getEmployees().subscribe(
    data => {this. employees = data;
   console.log(this.employees);
     });
}
save(){ 
  this.submitted = true;
  if(!this.employeeForm.valid){
      return;
  }

  this.httpService.saveCustomer(this.employeeForm.value)
  .subscribe();
}
  ngOnInit() {
  }

}
