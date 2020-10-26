import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';


import { PersonService } from 'src/app/Fservice/Sperson/person.service';
import { CategoriesService } from 'src/app/Fservice/Scategory/categories.service';
import { Router } from '@angular/router';
import { KriterionService } from 'src/app/Fservice/Skriteionim/kriterion.service';
import { LostService } from 'src/app/Fservice/Slost/lost.service';
import { FoundService } from 'src/app/Fservice/Sfound/found.service';
import { ClassItem } from 'src/app/Fclasses/ClassItems';
import { ItemService } from 'src/app/Fservice/Sitem/item.service';
import { KriterionToItemService } from 'src/app/Fservice/Skriterion_to_item/kriterion-to-item.service';
import { TypeValueService } from 'src/app/Fservice/Svalues/type-value.service';
import { OperatorService } from 'src/app/Fservice/Soperator/operator.service';
@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.css']
})
export class MenueComponent implements OnInit {

  constructor(private serviceKTI: KriterionToItemService, private serviceV: TypeValueService, private serviceO: OperatorService, private serviceI: ItemService, private serviceL: LostService, private serviceF: FoundService, private serviceP: PersonService, private serviceC: CategoriesService, private router: Router, private serviceK: KriterionService) { }
  private items: MenuItem[];
  L = "lost";
  F = "found"
  ngOnInit() {

    this.serviceF.listFound=new Array();
    this.serviceL.listLost=new Array();




    this.serviceV.getTypeValue().subscribe(
      myData => { this.serviceV.listValues = myData },
      err => { })

    this.serviceC.getCategory().subscribe(
      myData => {
        this.serviceC.listCategories = myData;

      },
      err => { console.log("err", this.serviceC.listCategories) },
    )





    //הבאת כל סוגי האופרטורים
    this.serviceO.getOperatorim().subscribe(
      myData => { this.serviceO.listOperators = myData },
      err => { })
    this.serviceP.user.name = null;

  }
  resetData(fOrL: string) {



    this.serviceKTI.listEzer = new Array()
    this.serviceK.listKriterion = null;

    this.serviceI.newItem = new ClassItem();
    this.serviceI.date = new Date().toISOString().substring(0, 10)
    this.serviceI.newItem.date_found_lost = new Date(this.serviceI.date);
    this.serviceC.filterListCategories = new Array();
    this.serviceP.noPerson = false;
    this.serviceP.listPerson = new Array();
    this.serviceK.displayNewKriteion = false;

    this.serviceKTI.countKriteion = 0;
    this.serviceC.codeCategoriaClali = this.serviceC.listCategories[0];//הצבת קטגוריה כללי במשתנה בסרוויס
    this.serviceC.categoryHight = this.serviceC.codeCategoriaClali.category_id;//איפוס קטגורית על בסרוויס
    this.serviceC.selectCategory = new Array();
    this.serviceC.selectCategory.push(this.serviceC.codeCategoriaClali);
    console.log("fhgfhgfhgfhgfhgf" + this.serviceC.selectCategory);
    this.serviceC.filterListCategories = this.serviceC.listCategories.filter(q => q.code_category_hight === this.serviceC.codeCategoriaClali.category_id);
    this.router.navigate(['/search/', fOrL]);


  }



  moveToTable(to: string) {
    // if (this.serviceF.listFound.length == 0) {
      this.serviceF.getF().subscribe(
        myData => {
          this.serviceF.listFound = myData, 
          this.serviceF.list=myData.map(x => Object.assign({}, x)),

          this.serviceL.getL().subscribe(
            myData => {
              this.serviceL.listLost = myData,
              this.serviceL.list= myData.map(x => Object.assign({}, x)),

              this.router.navigate(['/tableLF', to]), console.log("GetLost" + myData + "aaaaaaaa" + this.serviceL.listLost)
            },
            err => { console.log(err) }),
            console.log("GetFound" + myData);
        },
        err => { console.log(err); })
  
    
    console.log("list lost!!!!!!!!!!!!!!!!!"+this.serviceL.listLost)

  }

}//123456