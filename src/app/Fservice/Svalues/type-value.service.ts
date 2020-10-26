import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassType_value } from '../../Fclasses/ClassType_value';

@Injectable({
  providedIn: 'root'
})
export class TypeValueService {

  constructor(private http:HttpClient) { }


  basicURL="http://localhost:56980/api/TypeValue/";
  //רשימת סוגי ערכים
listValues:ClassType_value[]=new Array()

//הבאת כל סוגי הערכים
getTypeValue():Observable<Array<ClassType_value>>
{
 return this.http.get<Array<ClassType_value>>(this.basicURL+"Get")
}

}
