import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassLost } from 'src/app/Fclasses/ClassLost';


@Injectable({
  providedIn: 'root'
})
export class LostService {

  constructor(private http:HttpClient,) { }
  basicURL="http://localhost:56980/api/Lost/";
  thList:string[]=['aaa','bbb'];
  listLost:ClassLost[] =new Array()
  list: ClassLost[]=new Array()

  getL():Observable<Array<ClassLost>>
  {
    console.log("getlostservice")
   return this.http.get<Array<ClassLost>>(this.basicURL+"Get")
  }

}
