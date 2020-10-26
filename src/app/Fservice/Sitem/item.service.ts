import { Injectable } from '@angular/core';
import { ClassItem } from '../../Fclasses/ClassItems';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassKriterion_to_item } from '../../Fclasses/ClassKriterion_to_item';
import { ClassKriterionim } from 'src/app/Fclasses/ClassKriterionim';
import { ClassPerson } from 'src/app/Fclasses/ClassPerson';
import { PersonService } from '../Sperson/person.service';
import { ClassMail } from 'src/app/Fclasses/ClassMail';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient, private serviceP: PersonService) { }
  basicURL = "http://localhost:56980/api/Item/";
  newItem: ClassItem = new ClassItem
  itemToEdit:ClassItem;
  item: ClassItem;
  i:ClassItem
  date:string;//יכיל את התאריך של מציאה או אבדה
  place:Address;
 
sendMailToPersons(fORl: string,listPerson:ClassPerson[]):Observable<any>
{
  debugger
  return this.http.post<any>(this.basicURL + "SendMailToPersons/" + fORl, listPerson)
}
  //חיפוש חפץ
  searchItem(fORl: string, newItem: ClassItem): Observable<Array<ClassPerson>> {
    return this.http.post<Array<ClassPerson>>(this.basicURL + "Search/" + fORl, newItem)
  }
  //הבאת כל החפצים שעדכנתי
  getItemByUser(): Observable<Array<ClassItem>> {
    return this.http.get<Array<ClassItem>>(this.basicURL + "GetItemByUser/" + this.serviceP.user.person_id)
  }

  //מחיקת חפץ
  deleteItem(itemId: number) {
    return this.http.delete(this.basicURL + "Delete/" + itemId)
  }
  //שליחת מייל
  sendMail(mail: ClassMail) {
    return this.http.post(this.basicURL + "SendMail", mail)
  }

  editItem(editItem:ClassItem):Observable<ClassItem>
  {
    debugger
       return this.http.post<ClassItem>(this.basicURL+"EditItem",editItem)
  }
  

  


  saveImage(newItem: ClassItem, fileData:File):Observable<any> {
    
    
   const formData = new FormData();
   const NewItem:ClassItem=newItem;

    formData.append('image',fileData);
    formData.append('Item',JSON.stringify(NewItem));

   //  formData.append('userImage',JSON.stringify(u));
   console.log(newItem);
 debugger
    return this.http.post<any>(this.basicURL+"AddItem", formData);
    
  }
   //הוספת חפץ
   addItem(fORl: string, newItem: ClassItem): Observable<number> {
     debugger
    console.log(newItem);
    return this.http.post<number>(this.basicURL + "Post/" + fORl, newItem,)
  }




}