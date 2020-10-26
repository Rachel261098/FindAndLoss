import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassOperators } from '../../Fclasses/ClassOperators';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {

  constructor(private http:HttpClient) { }


  basicURL="http://localhost:56980/api/Operator/";
  //רשימת האופרטורים
  listOperators:ClassOperators[]=new Array()

  //הבאת כל האופרטורים
  getOperatorim():Observable<Array<ClassOperators>>
{
  return this.http.get<Array<ClassOperators>>(this.basicURL+"Get");
}
}
