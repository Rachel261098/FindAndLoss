import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { MyServiceService } from '../../../Fservice/my-service.service';
import { ClassCategories } from '../../../Fclasses/ClassCategories';
import { CategoriesService } from '../../../Fservice/Scategory/categories.service';
//import { EventEmitter } from 'events';
import Swal from '../../../../assets/scripts/sweetalert2@8.js'

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  constructor(private serviceC:CategoriesService ) { }

  ngOnInit() {

  }
// //מקבל קוד קטגורית העל
// @Input() categoryHight:number 
@Input() iconPlus:boolean; 

//שולח משתנה לסגירת הקומפוננטה
@Output() close= new EventEmitter();
// //יכיל את פרטי הקטגוריה החדשה
newCategory:ClassCategories=new ClassCategories;
   
n=new ClassCategories();
  
//פתיחת טופס להוספת קטגוריה
//הקוד מועתק חלקית מ sweetAlert
open()
{
  Swal.fire({
    title: 'קטגוריה חדשה',
    input: 'text',
    cancelButtonColor: "#e71264",
    confirmButtonColor: "#e71264",
    showCancelButton: true,
    cancelButtonText:'ביטול',
    confirmButtonText: 'הוספה',

    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    if (result.value) {//אם הכנסו נתונים בתיבת טקסט
      this.newCategory.describe=result.value; //הצבת הנתונים במשתנה חדש לפני שליחתו לסרבר
      this.newCategory.code_category_hight=this.serviceC.categoryHight;//קטגורית העל שווה לקטגוריית העל מהסרוויס
//הוספת הקטגוריה החדשה לרשימת הקטגוריות
        this.serviceC.addCategory(this.newCategory).subscribe(
          myData => { this.serviceC.listCategories = myData;
            //סגירת הקומפוננטה ושלילחה לקומפוננטת האב את קוד הקטגוריה שנוצרה כעת
            this.close.emit(this.serviceC.listCategories.find(q=>q.code_category_hight==this.serviceC.categoryHight&&q.describe==result.value).category_id);
            },
          err => {})
  
    }})
}
}
