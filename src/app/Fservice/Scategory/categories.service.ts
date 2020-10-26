import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassCategories } from '../../Fclasses/ClassCategories';

@Injectable({
  providedIn: 'root'
}) 
 

export class CategoriesService {

  constructor(private http:HttpClient) { }
    //קוד קטגורית העל עד שנהיה קוד הקטגוריה שנבחרה
  categoryHight:number
 codeCategoriaClali:ClassCategories;
  basicURL="http://localhost:56980/api/Categories/";
 //רשימת הקטגוריות
listCategories:ClassCategories[] =new Array()
//רשימת סדר הקטגוריות שנבחרו
selectCategory:ClassCategories[]=new Array()
categorySelected:string//הקטגוריה שנבחרה 
filterListCategories:ClassCategories[]=new Array(); //רשימת קטגוריות מסונן לפי קטגורית העל הנוכחית

//הבאת כל הקטגוריות
 getCategory():Observable<Array<ClassCategories>>
{
 return this.http.get<Array<ClassCategories>>(this.basicURL+"GetC")
}

// קוד קטגוריה לפי שם הקטגוריה
getCodeCategoryByName(c:ClassCategories):Observable<number>
{
 return this.http.post<number>(this.basicURL+"GetCodeByName",c)
}

// הוספת קטגוריה
addCategory(newCategory:ClassCategories):Observable<Array<ClassCategories>>
{
  return this.http.post<Array<ClassCategories>>(this.basicURL+"Post",newCategory)
}
}
