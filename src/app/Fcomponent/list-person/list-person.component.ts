import { Component, OnInit } from '@angular/core';
import { ClassPerson } from 'src/app/Fclasses/ClassPerson';
import { SelectItem } from 'primeng/api';
import { PersonService } from 'src/app/Fservice/Sperson/person.service';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  constructor(private serviceP:PersonService,  ) { }
listPerson:ClassPerson[];
sortOptions: SelectItem[];
selectedPerson: ClassPerson;

    displayDialog: boolean;
    sortKey: string;

    sortField: string;

    sortOrder: number;

  ngOnInit() {
    
   this.serviceP.getPerson().subscribe(
    myData =>{this.listPerson=myData},
    err =>{}
   )
   this.sortOptions = [
    {label: 'שם', value: 'name'},
    {label: 'קוד', value: 'person_id'},]
  }


onSortChange(event) {
  let value = event.value;

  if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
  }
  else {
      this.sortOrder = 1;
      this.sortField = value;
  }
}
selectPerson(event: Event, person: ClassPerson) {
this.selectedPerson = person;
this.displayDialog = true;
event.preventDefault();

}
onDialogHide() {
this.selectedPerson = null;
}
}