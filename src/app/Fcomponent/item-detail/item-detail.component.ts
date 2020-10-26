import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClassCategories } from '../../Fclasses/ClassCategories';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { CategoriesService } from '../../Fservice/Scategory/categories.service';
import { KriterionService } from '../../Fservice/Skriteionim/kriterion.service';
import { LostService } from 'src/app/Fservice/Slost/lost.service';
import { FoundService } from 'src/app/Fservice/Sfound/found.service';
import { ClassMail } from 'src/app/Fclasses/ClassMail';
import { PersonService } from 'src/app/Fservice/Sperson/person.service';
import { ItemService } from 'src/app/Fservice/Sitem/item.service';
import { ClassPerson } from 'src/app/Fclasses/ClassPerson';



@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit
{
see:boolean;//הצגת הקומפוננטה
  //מאיפה הגיע-ממציאה או מאבדה//
type:string="lost";

  constructor(private router: Router,private serviceP: PersonService, private serviceI: ItemService, private serviceC:CategoriesService,private serviceL:LostService,private serviceF:FoundService, private serviceK:KriterionService, private route:ActivatedRoute) { }

  hiddenC:boolean;//משתנה להצגת קומפוננטת הוספת קטגוריה
   // hiddenTI=false//משתנה להצגת טופס החפץ
 false=false;
 true=true;
  ngOnInit()
  {   
 

    this.see=true;
    this.route.params
   .subscribe((paramsFromUrl: Params) => {
     //urlמציב במשתנה מאיפה  הגיע דרך ה 
      this.type = paramsFromUrl.type;
     
   });



  }

  
  //קורה כאשר נבחרת קטגוריה הפונקציה מקבלת את קוד הקטגוריה
   changeCategoryId(idCategory:number)
   { 
    
    this.hiddenC=false;
     //דחיפת הקטגוריה למערך הקטגוריות שנבחרו
        this.serviceC.selectCategory.push(this.serviceC.listCategories.find(q=>q.category_id===idCategory))
       
        this.serviceC.categoryHight=idCategory; //שינוי קטגורית העל
        //סינון הקטגוריות הבאות לפי קטגוריה זו
        this.serviceC.filterListCategories=this.serviceC.listCategories.filter(q=>q.code_category_hight===idCategory)
        
         if(this.serviceC.filterListCategories.length===0) //אם לקטגוריה זו אין ילדים...
         {
               this.getKriterionByCodeCategory(); 
              // this.hiddenTI=!this.hiddenTI;//הצגת טופס החפץ עם הקריטריונים
               this.hiddenC=true;//(+) הסרת האפשרות להוספת קטגוריה
         }
         
   }
   //הבאת כל המאפיינים המתאימים לחפץ
   getKriterionByCodeCategory()
   {
    this.serviceK.getKriterionByCategoryId(this.serviceC.selectCategory).subscribe(
      myData => { 
        this.serviceK.listKriterion= myData,console.log(myData)},
          err => {console.log(err)})
   }
   
  
  }
 