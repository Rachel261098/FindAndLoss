
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TypeValueService } from '../../../Fservice/Svalues/type-value.service';
import { KriterionService } from '../../../Fservice/Skriteionim/kriterion.service';
import { OperatorService } from '../../../Fservice/Soperator/operator.service';
import { CategoriesService } from '../../../Fservice/Scategory/categories.service';
import { ClassKriterionim } from 'src/app/Fclasses/ClassKriterionim';
import { ClassOperators } from 'src/app/Fclasses/ClassOperators';


@Component({
  selector: 'app-new-kriterion',
  templateUrl: './new-kriterion.component.html',
  styleUrls: ['./new-kriterion.component.css']
})
export class NewKriterionComponent implements OnInit {

  constructor(private serviceC: CategoriesService, private serviceV: TypeValueService, private serviceK: KriterionService, private serviceO: OperatorService) { }
  //מקבל קוד קטגוריה
  @Input() idCategory: number
  //מחזיר משתנה ע"מ לסגור את הקומפוננטה
  @Output() close = new EventEmitter();

  value: string;

  requieredData = true
  @Input() type: string;
  ngOnInit() {
    this.serviceK.NewKriterion=new ClassKriterionim();
    console.log("newCriterion")
    
  }
  loL:ClassOperators[]=new Array();
  loF:ClassOperators[]=new Array();
  opertorFound:boolean=false;
  //הצבה במשתנה את הערך שנבחר
  changeValue(value) {
    debugger
    this.serviceK.NewKriterion.operator_id=null
    this.value = this.serviceV.listValues.find(v => v.value_id == this.serviceK.NewKriterion.value_id).name;
  if(this.value=="text")
  {debugger
 this.loF=this.serviceO.listOperators.filter(o=>o.name=='in'||o.name=='like')
    this.loL=this.serviceO.listOperators.filter(o=>o.name=='in'||o.name=='like')
    this.opertorFound=true;
  }
  else
{
  this.loL=this.serviceO.listOperators.filter(o=>o.name!='in')
this.opertorFound=false;
  // this.loF=this.serviceO.listOperators.filter(o=>o.name=='like'||o.name=='in')
}
  

  }

  save() {
    debugger
    if (this.serviceK.NewKriterion.name != null && this.serviceK.NewKriterion.value_id != null && this.serviceK.NewKriterion.category_id!=0) {
      this.requieredData = true;

      if (this.serviceK.NewKriterion.operator_id == null)
    {
       this.serviceK.NewKriterion.operator_id = 5;//LIKE הצבת ערך ברירת מחדל  שיהיה שווה ל
   console.log( " this.serviceK.NewKriterion.operator_id "+this.serviceK.NewKriterion.operator_id )
      }
       

      this.serviceK.NewKriterion.option_values = this.serviceK.NewKriterion.option_values + ",";
      this.serviceK.addKriyeion(this.serviceK.NewKriterion).subscribe(
        myData => {
          debugger
          this.close.emit(false),
          this.serviceK.displayNewKriteion = false,
          this.serviceK.listKriterion.push(myData)
        console.log("this.serviceK.listKriterion"+this.serviceK.listKriterion)  
        this.close.emit(false);
          
        },
        err => {debugger})
    }
    else
      this.requieredData = false;
      

  }
  cancel() {
    this.close.emit(false);
    this.serviceK.displayNewKriteion = false;
    this.serviceK.NewKriterion.name = "",
      this.serviceK.NewKriterion.value_id = null, this.serviceK.NewKriterion.operator_id = null;
    this.serviceK.NewKriterion.option_values = "", this.serviceK.NewKriterion.category_id = 0
  }
valueOftypeOpertor:string="";
checkedtypMeafien(vl:string)
{
this.valueOftypeOpertor=this.serviceV.listValues.find(v=>v.translate==vl).name;
}
  

}

