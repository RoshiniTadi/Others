import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
 server:number =10;
 serverstatus : string ='success';
  constructor() { }
getserverstatus()
{
  return this.serverstatus;
}  ngOnInit() {
  }

}
