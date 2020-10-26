import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassFound } from 'src/app/Fclasses/ClassFound';

@Injectable({
  providedIn: 'root'
})
export class FoundService {

  constructor(private http:HttpClient,) { }
  basicURL="http://localhost:56980/api/Found/";
  thList:string[]=['aaa','bbb'];
  listFound:ClassFound[] =new Array()
  list: ClassFound[]=new Array()

getF():Observable<Array<ClassFound>>
{
 return this.http.get<Array<ClassFound>>(this.basicURL+"Get")
}

}
