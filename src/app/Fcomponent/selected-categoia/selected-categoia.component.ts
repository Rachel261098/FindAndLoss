import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoriesService } from '../../Fservice/Scategory/categories.service';
import { KriterionService } from '../../Fservice/Skriteionim/kriterion.service';
import { PersonService } from 'src/app/Fservice/Sperson/person.service';
import { ItemService } from 'src/app/Fservice/Sitem/item.service';
import { ClassItem } from 'src/app/Fclasses/ClassItems';
import { KriterionToItemService } from 'src/app/Fservice/Skriterion_to_item/kriterion-to-item.service';


@Component({
  selector: 'app-selected-categoia',
  templateUrl: './selected-categoia.component.html',
  styleUrls: ['./selected-categoia.component.css']
})
export class SelectedCategoiaComponent implements OnInit {
 @Output() close= new EventEmitter();
  constructor(private serviceI:ItemService,private serviceKTI:KriterionToItemService,private serviceP:PersonService,private serviceC:CategoriesService,private serviceK:KriterionService) { }
 
  ngOnInit() {
    console.log("ppppppppppp"+this.serviceC.selectCategory)
    
  }
  goBack(category_id:number)
  {
    this.serviceKTI.listEzer=new Array()
    this.serviceKTI.countKriteion=0;
    this.serviceK.displayNewKriteion=false;
    this.serviceI.newItem=new ClassItem();
    this.serviceI.date=new Date().toISOString().substring(0,10)
    this.serviceI.newItem.date_found_lost=new Date(this.serviceI.date);
    this.serviceC.selectCategory=this.serviceC.selectCategory.filter(q=>q.category_id<category_id)
    this.serviceK.listKriterion=null;
    this.close.emit(category_id);
    this.serviceP.listPerson=new Array();
    this.serviceP.noPerson=false;
    this.serviceI.newItem.nameAddress=""
  }
}
