import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassPerson } from '../../Fclasses/ClassPerson';
import { ClassItem } from 'src/app/Fclasses/ClassItems';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }
  listMyItem: Array<ClassItem>;
  listMyFound: Array<ClassItem>;
  listMyLost: Array<ClassItem>;
  basicURL = "http://localhost:56980/api/Person/";
  //משתמש
  user: ClassPerson = new ClassPerson();
  listPerson: ClassPerson[] = new Array();//רשימת אנשים שחוזרת לאחר חיפוש
  noPerson: boolean//אם חזרו אנשים מהחיפוש 
  //?????הבאת אנשים
  //למה מיועד??????
  getPerson(): Observable<Array<ClassPerson>> {
    return this.http.get<Array<ClassPerson>>(this.basicURL + "Get")
  }

  //חיפוש האם קיים משתמש זה
  searchPerson(user: ClassPerson): Observable<ClassPerson> {
    return this.http.post<ClassPerson>(this.basicURL + "PostByPasswordAndMail", user)
  }

  //הוספת אדם
  addPerson(newPerson: ClassPerson): Observable<ClassPerson> {
    console.log("newPerson", newPerson)
    return this.http.post<ClassPerson>(this.basicURL + "Add", newPerson)
  }
  forgotPassword(fp: ClassPerson): Observable<ClassPerson> {
    return this.http.post<ClassPerson>(this.basicURL + "ForgotPassword", fp)
  }
  editPerson(editUser: ClassPerson): Observable<ClassPerson> {
    return this.http.post<ClassPerson>(this.basicURL + "EditUser", editUser)
  }
}
