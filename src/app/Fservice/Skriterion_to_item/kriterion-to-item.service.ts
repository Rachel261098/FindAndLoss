import { Injectable } from '@angular/core';
import { ClassKriterion_to_item } from '../../Fclasses/ClassKriterion_to_item';

@Injectable({
  providedIn: 'root'
})
export class KriterionToItemService {

  constructor() { }
  basicURL="http://localhost:56980/api/";
  listKriterionToItem:ClassKriterion_to_item[]=new Array();
  listEzer:ClassKriterion_to_item[]=new Array()
  countKriteion:number=0;
  countKriteionToEdit:number=0;
  listKTIedit:ClassKriterion_to_item[];
}
