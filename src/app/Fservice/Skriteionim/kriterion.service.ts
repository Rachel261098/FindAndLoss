import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClassKriterionim } from '../../Fclasses/ClassKriterionim';
import { Observable } from 'rxjs';
import { ClassCategories } from '../../Fclasses/ClassCategories';

@Injectable({
  providedIn: 'root'
})
export class KriterionService {

  constructor(private http:HttpClient) { }

  basicURL="http://localhost:56980/api/Kriterionim/";

  //רשימת הקריטריונים להצגה
  listKriterion:ClassKriterionim[]=new Array();
  NewKriterion: ClassKriterionim;
  displayNewKriteion:boolean;//משתנה אם יוצג הקומפוננטה של קריטריון חדש

//הוספת קריטריון
addKriyeion(newKriteion:ClassKriterionim):Observable<ClassKriterionim>
{
  return this.http.post<ClassKriterionim>(this.basicURL+"Post",newKriteion)
}

//קבלת כל הקריטריונים לפי קוד קטגוריה
getKriterionByCategoryId(listCategoria:ClassCategories[]):Observable<Array<ClassKriterionim>>
{
  return this.http.post<Array<ClassKriterionim>>(this.basicURL+"GetById",listCategoria);
}

//הבאת כל הקריטריונים
getKriterionim():Observable<Array<ClassKriterionim>>
{
  return this.http.get<Array<ClassKriterionim>>(this.basicURL+"Get");
}
//selectהוספת אופציה ל
PostOption(KriterionId:number, Option:string):Observable<string>
{
  return this.http.get<string>(this.basicURL+"AddOption/"+KriterionId+"/"+Option);
}

}
