import { Component, OnInit } from '@angular/core';
import { ClassItem } from 'src/app/Fclasses/ClassItems';
import { PersonService } from 'src/app/Fservice/Sperson/person.service';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { OperatorService } from 'src/app/Fservice/Soperator/operator.service';
import { KriterionToItemService } from 'src/app/Fservice/Skriterion_to_item/kriterion-to-item.service';
import { ItemService } from 'src/app/Fservice/Sitem/item.service';
import { TypeValueService } from 'src/app/Fservice/Svalues/type-value.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  constructor(private router: Router, private serviceP: PersonService, private serviceI: ItemService, private serviceKTI: KriterionToItemService, private route: ActivatedRoute) { }
 
  operator: string;
  messageCheckDate = false;//הצגת הודעה על תאריך לא תקין
 
  editDate: string;

  ngOnInit() {

    this.serviceKTI.countKriteionToEdit = 0;


    this.route.params
      .subscribe((paramsFromUrl: Params) => {
        this.serviceI.item = this.serviceP.listMyItem.find(i => i.item_id == paramsFromUrl.itemId)
      });
    
    this.serviceI.itemToEdit = { ...this.serviceI.item };

    this.serviceKTI.listKTIedit = this.serviceI.itemToEdit.listKriterion;

   

    this.editDate = new Date(this.serviceI.itemToEdit.date_found_lost).toDateString();


  }
  checkDate(date, date_found_lost) {
    debugger
    if (new Date(date) > new Date(this.serviceI.item.report_date) ) {
      date_found_lost.focus()
      this.messageCheckDate = true;

    }
    else
      this.messageCheckDate = false
  }

  save() {

    
    this.serviceI.itemToEdit.listKriterion = this.serviceKTI.listKTIedit;
    this.serviceI.itemToEdit.date_found_lost = new Date(this.editDate);
    this.serviceI.editItem(this.serviceI.itemToEdit).subscribe(

      myData => {
        

        this.router.navigate(['/MyDashboard'])
        //  this.close.emit(true);
      },
      err => {
      })
  }

  cancel() {
    // this.editUser=new ClassPerson();
    // this.checkPassword="";
    this.router.navigate(['/MyDashboard'])
  }



}
