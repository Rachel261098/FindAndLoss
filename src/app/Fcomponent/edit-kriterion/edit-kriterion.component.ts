import { Component, OnInit, Input } from '@angular/core';
import { ClassType_value } from 'src/app/Fclasses/ClassType_value';
import { ClassKriterion_to_item } from 'src/app/Fclasses/ClassKriterion_to_item';
import { KriterionService } from 'src/app/Fservice/Skriteionim/kriterion.service';
import { CategoriesService } from 'src/app/Fservice/Scategory/categories.service';
import { TypeValueService } from 'src/app/Fservice/Svalues/type-value.service';
import { KriterionToItemService } from 'src/app/Fservice/Skriterion_to_item/kriterion-to-item.service';
import { OperatorService } from 'src/app/Fservice/Soperator/operator.service';
import Swal from '../../../assets/scripts/sweetalert2@8.js'
import { ItemService } from 'src/app/Fservice/Sitem/item.service.js';
import { ClassOperators } from 'src/app/Fclasses/ClassOperators.js';

@Component({
  selector: 'app-edit-kriterion',
  templateUrl: './edit-kriterion.component.html',
  styleUrls: ['./edit-kriterion.component.css']
})
export class EditKriterionComponent implements OnInit {

  constructor(private serviceK:KriterionService, private serviceC:CategoriesService, private serviceV:TypeValueService, private serviceO:OperatorService,private serviceKTI:KriterionToItemService,private serviceI:ItemService) { }
  @Input() name:string;
  @Input() valueId:number;
  @Input() operatorId:number;
  @Input() kriterionId:number;
  @Input() type:string//משתנה מאיפה הגיע ממציאה או אבדה
  @Input() options:string;

  value:ClassType_value;
  operator:string;
  listOptions:string[]=new Array();
  answer:any;
  answer2:any;
  kriterion:ClassKriterion_to_item=new ClassKriterion_to_item();
  option:string;
  numKriterion:number;// מספר הקריטריון מתוך רשימת הקרטיריונים הספציפית למוצר זה
  ngOnInit() {
    this.numKriterion=this.serviceKTI.countKriteionToEdit;
    this.serviceKTI.countKriteionToEdit++;


    // this.kriterion.kriterion_id=this.kriterionId;

    // this.serviceKTI.listEzer.push(this.kriterion);
    // this.serviceKTI.listEzer.forEach(i=>console.log("5555555555   "+i.kriterion_id))
    // this.serviceKTI.listKTIedit=this.serviceKTI.listEzer;
    // this.serviceI.itemToEdit.listKriterion=this.serviceKTI.listEzer;
  //   //משתנה זה יכיל את הערך, ע"י הקוד שנשלח
   this.value=this.serviceV.listValues.find(v=>v.value_id===this.valueId);
   console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq    "+ this.value.translate)



    this.serviceO.getOperatorim().subscribe(
      myData => { this.serviceO.listOperators = myData ,
        this.operator=this.serviceO.listOperators.find(o=>o.operator_id===this.operatorId).name,
        console.log("ssssssssssssssssssssssssssssss"+ this.operator)

      },
      err => { })

     

   //console.log("aaaaaaaa"+this.options)
   
   
    this.createList();
   
  }
 add(numKriterion:number)
 {
if(this.serviceKTI.listKTIedit[this.numKriterion].value=="0")
{
  Swal.fire({
    title: 'הוספת אופציה ',
    input: 'text',
 
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
            this.serviceKTI.listKTIedit[numKriterion].value=this.option;
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
