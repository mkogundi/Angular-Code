import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowServerAdd : Boolean = false;  
  serverCreationStatus : String = "No server was created";

  constructor() { 
 /*   setTimeout(()=>{
      this.allowServerAdd = true;
    },4000); */
  }

  ngOnInit() {
  }

 /*  onCreateServer(){
    this.serverCreationStatus = "server was created";
  } */

}
