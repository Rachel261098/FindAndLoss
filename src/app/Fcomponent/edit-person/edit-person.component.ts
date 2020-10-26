import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PersonService } from 'src/app/Fservice/Sperson/person.service';
import { ClassPerson } from 'src/app/Fclasses/ClassPerson';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {
  // @Output() close= new EventEmitter();
  constructor(private serviceP:PersonService,private router:Router) { }
  checkPassword:string;
  hidePassword=true;
  hideCheckPassword=true;
  err="";
  editUser:ClassPerson;

  ngOnInit() {
    this.editUser={...this.serviceP.user};
  
  this.checkPassword=this.serviceP.user.password;
    
   
 
  }
  editPerson()
  {
this.serviceP.editPerson(this.editUser).subscribe(

  myData => {
    this.serviceP.user=myData;
    this.router.navigate(['/MyDashboard'])
  //  this.close.emit(true);
  },
  err => { })
  }
  cancel()
  {
    // this.editUser=new ClassPerson();
    // this.checkPassword="";
    this.router.navigate(['/MyDashboard'])
  }

}
