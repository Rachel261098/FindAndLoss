import { Component, OnInit } from '@angular/core';
import { ClassPerson } from '../../Fclasses/ClassPerson';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { PersonService } from '../../Fservice/Sperson/person.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:ClassPerson
find1=false
hide = true;//משתנה להצגת והסתרת הסיסמה
  constructor(private serviceP:PersonService ,private location:Location, private router:Router) { }
  display=true;
  //כניסה - בדיקה האם קיים אדם כזה במסד
  enter()
  {
         this.serviceP.searchPerson(this.user).subscribe(
          myData => { 
            this.serviceP.user=myData
            if(this.serviceP.user.person_id!=0)
            {debugger
              console.log("this.serviceP.user.person_id"+this.serviceP.user.person_id)
                this.router.navigate(['/home'])
                //console.log( this.serviceP.user)
            }  
             else
             {
               this.find1=true;   
             }
        },
          err => {debugger})
         
 
  }
  ngOnInit() {
    this.user=new ClassPerson();

  }


  


 fp:ClassPerson=new ClassPerson();
  forgotPassword(userName:string)
  {
   if(userName!=null)
   {
    this.fp.name=userName
    this.serviceP.forgotPassword( this.fp).subscribe(
      myData => {
        if(myData!=null)
        {
        this.fp=myData 
       console.log(this.fp.password)
       alert(this.fp.name  + "נשלח לך ברגעים אלו סיסמתך למייל")
        }
        else

       alert("BAG")
       
    },
      err => {})
    }
  
  }

}
