import { Component, OnInit, Input } from '@angular/core';
import { ClassType_value } from '../../Fclasses/ClassType_value';
import { Options } from 'selenium-webdriver/safari';
import { TypeValueService } from '../../Fservice/Svalues/type-value.service';
import { ClassOperators } from '../../Fclasses/ClassOperators';
import {ClassKriterion_to_item  } from '../../Fclasses/ClassKriterion_to_item';
import { OperatorService } from '../../Fservice/Soperator/operator.service';
import { KriterionService } from '../../Fservice/Skriteionim/kriterion.service';
import { KriterionToItemService } from '../../Fservice/Skriterion_to_item/kriterion-to-item.service';
import { CategoriesService } from '../../Fservice/Scategory/categories.service';

import Swal from '../../../assets/scripts/sweetalert2@8.js'
import { stringify } from '@angular/core/src/util';
import { PersonService } from 'src/app/Fservice/Sperson/person.service';
import { ItemService } from 'src/app/Fservice/Sitem/item.service';

@Component({
  selector: 'app-kriterion',
  templateUrl: './kriterion.component.html',
  styleUrls: ['./kriterion.component.css']
})
export class KriterionComponent implements OnInit {


//מקבל שם קוד ערך קוד אופרטור ואופציות לערכים
  @Input() name:string;
  @Input() valueId:number;
  @Input() operatorId:number;
  @Input() kriterionId:number;
  @Input() type:string//משתנה מאיפה הגיע ממציאה או אבדה
  @Input() options:string;
  @Input() itemid:number;


  value:ClassType_value;
  operator:string;
  listOptions:string[]=new Array();
  answer:any;
  answer2:any;
  kriterion:ClassKriterion_to_item=new ClassKriterion_to_item();
  option:string;
  numKriterion:number;// מספר הקריטריון מתוך רשימת הקרטיריונים הספציפית למוצר זה
  KTI:ClassKriterion_to_item

  constructor(private serviceK:KriterionService,private serviceI:ItemService, private serviceP:PersonService,private serviceC:CategoriesService, private serviceV:TypeValueService, private serviceO:OperatorService,private serviceKTI:KriterionToItemService) { }

  ngOnInit() {
    console.log(this.itemid+"      555555555555555    55555555555     5")

    this.numKriterion=this.serviceKTI.countKriteion++;
    this.kriterion.kriterion_id=this.kriterionId;
  

    this.serviceKTI.listEzer.push(this.kriterion);

    this.serviceKTI.listKriterionToItem=this.serviceKTI.listEzer;
      // this.serviceKTI.listKriterionToItem[this.numKriterion].value_id=this.valueId
    // this.serviceKTI.listKriterionToItem[this.numKriterion].operator_id=this.operatorId
  

    console.log(this.serviceKTI.listKriterionToItem.length)
    //משתנה זה יכיל את הערך, ע"י הקוד שנשלח
   this.value=this.serviceV.listValues.find(v=>v.value_id===this.valueId);
    //משתנה זה יכיל את האופרטור, ע"י הקוד שנשלח
    console.log(this.serviceO.listOperators.find(o=>o.operator_id===this.operatorId).name)
   this.operator=this.serviceO.listOperators.find(o=>o.operator_id===this.operatorId).name
   //console.log("n"+this.value)
   //console.log("aaaaaaaa"+this.options)
   
   
    this.createList();

console.log(this.serviceKTI.listKriterionToItem[this.numKriterion].id+"   this.serviceKTI.listKriterionToItem[this.numKriterion].id");

    if(this.itemid!=null)
    {
      this.KTI=this.serviceI.i.listKriterion.find(v=>v.kriterion_id==this.kriterionId)
      if(this.KTI!=null)
      {
         this.serviceKTI.listKriterionToItem[this.numKriterion].item_id=this.itemid
   this.serviceKTI.listKriterionToItem[this.numKriterion].id=this.KTI.id
        this.serviceKTI.listKriterionToItem[this.numKriterion].value=this.KTI.value
        this.serviceKTI.listKriterionToItem[this.numKriterion].value2=this.KTI.value2
        this.serviceKTI.listKriterionToItem[this.numKriterion].option_values=this.KTI.option_values
      }
      // this.serviceI.i.listKriterion=new Array<ClassKriterion_to_item>();
    }

  }
 add()
 {
if(this.serviceKTI.listKriterionToItem[this.numKriterion].value=="0")
{
  Swal.fire({
    title: 'הוספת אופציה ',
    input: 'text',
    cancelButtonColor: "#e71264",
    confirmButtonColor: "#e71264",
    showCancelButton: true,
    cancelButtonText:'ביטול',
    confirmButtonText: 'הוספה',

    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    if (result.value) {//אם הכנסו נתונים בתיבת טקסט
      this.option=result.value; //הצבת הנתונים במשתנה חדש לפני שליחתו לסרבר
      this.serviceK.PostOption(this.kriterionId,this.option).subscribe(
          myData => { this.options = myData,console.log(this.options);
            this.createList();
            this.serviceKTI.listKriterionToItem[this.numKriterion].value=this.option;
            },
          err => {console.log(err)})
  
    }})
  }

  
 }
 createList()
  {
    this.listOptions=new Array(); 
    let word:string="";
   // אם נשלחו אופציות, פירוק המחרוזת למערך 
   if(this.options!=null)
        for(let i=0;i<this.options.length; i++)
        {

          if(this.options[i]===",")
          {
          this.listOptions.push(word)
          word="";
          }
          else
         word=word+this.options[i]
        }
       
  }

  

}
