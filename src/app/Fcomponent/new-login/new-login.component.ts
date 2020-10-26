
import { Component, OnInit } from '@angular/core';
import { ClassPerson } from '../../Fclasses/ClassPerson';
import { MyServiceService } from '../../Fservice/my-service.service';
import { PersonService } from '../../Fservice/Sperson/person.service';
import { Router } from '@angular/router';
// ES6 Modules or TypeScript
import Swal from '../../../assets/scripts/sweetalert2@8.js'


@Component({
  selector: 'app-new-login',
  templateUrl: './new-login.component.html',
  styleUrls: ['./new-login.component.css']
})
export class NewLoginComponent implements OnInit {

  hidePassword=true;
  hideCheckPassword=true;
  newPerson:ClassPerson
  listPerson:ClassPerson
  checkPassword:string
  //הערה שהסיסמה ובדיקת הסיסמה לא תואמים
  err:string=" ";
  constructor(private serviceP:PersonService, private router:Router ) { }
  ngOnInit() {
    this.newPerson=new ClassPerson();
  }
  //הוספת משתמש
  addNewPerson()
  {
      //בדיקה האם הסיסמה ובדיקת הסיסמה תואמים
   if(this.newPerson.password===this.checkPassword)
   {
    //בדיקה האם קיים משתמש כזה
    this.serviceP.searchPerson(this.newPerson).subscribe(
      
      myData => { 
        this.serviceP.user=myData
        if(this.serviceP.user.person_id!=0)
        {
          Swal.fire({
            type: 'error',
            title: 'אופסס...',
            text: 'שם משתמש זה כבר קיים במערכת',
            confirmButtonText:'אישור',
           
          })
        }
        else
      {
    this.err=""
     this.serviceP.addPerson(this.newPerson).subscribe(
      myData => {
        this.serviceP.user=myData

         Swal.fire({
          type: 'success',
          title: 'נרשמת בהצלחה!',
          showConfirmButton: false,
          timer: 1500
        })
      
      this.router.navigate(['/home'])},  
        err => {debugger})
        
     }
    },
    err => {})
    }
     else
     this.err="סיסמה שגויה"
    
  }



  
  addNewPerson1()
  {
      //בדיקה האם הסיסמה ובדיקת הסיסמה תואמים
   if(this.newPerson.password===this.checkPassword)
   {
    
    this.err=""
     this.serviceP.addPerson(this.newPerson).subscribe(
      myData => {

        this.serviceP.user=myData
        if(this.serviceP.user.person_id==0)
        {
          Swal.fire({
            type: 'error',
            title: 'אופסס...',
            text: 'שם משתמש זה כבר קיים במערכת',
            confirmButtonText:'אישור',
           
          })
        }
        else
{
         Swal.fire({
          type: 'success',
          title: 'נרשמת בהצלחה!',
          showConfirmButton: false,
          timer: 1500
        });
      
      this.router.navigate(['/home'])}
      
        
     
    },
    err => {})
    }
     else
     this.err="סיסמה שגויה"
    
  }
  
  }
  