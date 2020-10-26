import { ClassKriterionim } from "./ClassKriterionim";
import { ClassKriterion_to_item } from "./ClassKriterion_to_item";

export class ClassItem 
{
    item_id:number;//קוד חפץ
    categoriy_id:number;//קוד קטגוריה
    describe:string;//שם החפץ
    report_date:Date;//תאריך עדכון
    comment:string;//הערה
    person_id:number;//קוד אדם
    ForL:string;//מציאה או אבידה?
    date_found_lost:Date;//תאריך מציאה או אבידה
    listKriterion:ClassKriterion_to_item[];//רשימה של כל המאפיינים עם הערכים
    lat:number;
    lng:number;
    nameAddress:string;
}