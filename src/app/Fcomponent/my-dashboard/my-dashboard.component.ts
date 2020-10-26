import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/Fservice/Sperson/person.service';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/Fservice/Sitem/item.service';
import { ClassItem } from 'src/app/Fclasses/ClassItems';
import { LostService } from 'src/app/Fservice/Slost/lost.service';
import { FoundService } from 'src/app/Fservice/Sfound/found.service';
import { KriterionService } from 'src/app/Fservice/Skriteionim/kriterion.service';
import { ClassCategories } from 'src/app/Fclasses/ClassCategories';
import { CategoriesService } from 'src/app/Fservice/Scategory/categories.service';
import { ClassKriterion_to_item } from 'src/app/Fclasses/ClassKriterion_to_item';
import { KriterionToItemService } from 'src/app/Fservice/Skriterion_to_item/kriterion-to-item.service';

// @Component({
//   selector: 'app-my-dashboard',
//   templateUrl: './my-dashboard.component.html',
//   styleUrls: ['./my-dashboard.component.css']
// })
// export class MyDashboardComponent implements OnInit {

//   constructor(private serviceKTI:KriterionToItemService,private serviceC:CategoriesService,private serviceP:PersonService,private serviceK:KriterionService,private serviceI:ItemService, private router:Router,private serviceL:LostService,private serviceF:FoundService) { }
// hiddenEdit:boolean=true; 
// dispalyLost:boolean=false;
// dispalyFound:boolean=false;
//   ngOnInit() 
//   {
// this.serviceP.listMyItem=new Array();
// this.serviceP.listMyLost=new Array();
// this.serviceP.listMyFound=new Array();
//          this.getMyitem(); 
       
         

//   }
//   delete(id:number)
//   {
//     if(confirm("Are you sure to delete ")) {
//       console.log("Implement delete functionality here");
//       this.serviceI.deleteItem(id).subscribe(
//         myData => {  this.update();
//           },
//         err => { debugger; console.log(err)})
//     }
      
//   }
//   update()
//   {
//     this.serviceF.getF().subscribe(
//       myData => {  this.serviceF.listFound=myData,
//         this.serviceF.list=myData
//         },
//       err => { debugger; console.log(err)})

    
//     this.serviceL.getL().subscribe(
//       myData => {  this.serviceL.listLost=myData,
//         this.serviceL.list=myData
//         },
//       err => { debugger; console.log(err)})
//       this.getMyitem();
//     }
  
//   getMyitem()
//   {
//       //כאשר המשתמש עדיין לא נכנס הוא מועבר ללוגין
//       if(this.serviceP.user==null)
//       this.router.navigate(['/login'])

//       else
//        {
//      this.serviceI.getItemByUser().subscribe(
//        myData => {  this.serviceP.listMyItem= myData;
//         this.serviceP.listMyFound=this.serviceP.listMyItem.filter(i=>i.ForL=='found');
//         this.serviceP.listMyLost=this.serviceP.listMyItem.filter(i=>i.ForL=='lost');
//         console.log(myData) ;
//          },
//        err => {console.log(err)})
 
//           }
//   }
//   editUser()
//   {
//     // this.hiddenEdit=false;
//     this.router.navigate(['/EditUser']);
//   }
//   editItem(itemId:number)
//   {
//     console.log(this.serviceP.listMyItem)
//     this.router.navigate(['/EditItem/',itemId]);
//     // this.router.navigate(['/form',itemId]);

//   }



//   listCategoryot:ClassCategories[]=new Array<ClassCategories>();
//   categorya:ClassCategories
//   KTI:ClassKriterion_to_item;
//   searchOrEditItem(itemId:number)
//   {
//     debugger
//     this.serviceI.i=this.serviceP.listMyFound.find(x=>x.item_id==itemId)
//     if(this.serviceI.i==null)
//     this.serviceI.i=this.serviceP.listMyLost.find(x=>x.item_id==itemId)
//     console.log("this.serviceI.i.date_found_lost"+this.serviceI.i.date_found_lost)
//     this.serviceI.date=this.serviceI.i.date_found_lost.toString()
//         console.log("this.serviceI.i.date_found_lost"+this.serviceI.i.date_found_lost)
//     // this.serviceI.newItem.date_found_lost=this.serviceI.i.date_found_lost


//       // this.serviceI.newItem.comment=this.serviceI.i.comment
//       // this.serviceI.newItem.ForL=this.serviceI.i.ForL
//       // this.serviceI.newItem.nameAddress=this.serviceI.i.nameAddress

//       this.serviceI.newItem = { ...this.serviceI.i };



//     this.categorya=this.serviceC.listCategories.find(c=>c.category_id==this.serviceI.i.categoriy_id)
//     this.serviceC.categoryHight=this.categorya.category_id
//     this.listCategoryot.push(this.categorya)
//     while(this.categorya.code_category_hight!=1 )
//      {
//     this.categorya=this.serviceC.listCategories.find(c=>c.category_id==this.categorya.code_category_hight)
//     this.listCategoryot.push(this.categorya)
//      }
//     //  this.serviceI.date=this.serviceI.newItem.date_found_lost.toISOString().substring(0,10)
//     this.router.navigate(['/form',itemId]);
//       this.serviceK.getKriterionByCategoryId(this.listCategoryot).subscribe(
//         myData => {
//           this.serviceK.listKriterion = myData, console.log(myData)
         
//         },
//         err => { console.log(err) })
//         this.serviceC.selectCategory=this.listCategoryot
//         this.listCategoryot=new Array<ClassCategories>();
    
//   }
// }



@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent implements OnInit
 {
 constructor(private serviceKTI:KriterionToItemService,private serviceC:CategoriesService,private serviceP:PersonService,private serviceK:KriterionService,private serviceI:ItemService, private router:Router,private serviceL:LostService,private serviceF:FoundService) { }
hiddenEdit: boolean = true;
  dataSource=[];
  dataSourceLost=[];
  // th>קוד מוצר</th>
  //         <th>שם מוצר</th> 
  //         <th>תאריך מציאה</th>
  //         <th>תאריך עדכון</th>
  //         <th>חיפוש</th>
  //         <th>עריכה</th>
  //         <th>מחיקה</th>
  displayedColumns: string[] = ['id', 'describe', 'foundDate', 'updateDate', 'button'];


  ngOnInit() {
    this.serviceP.listMyItem = new Array();
    this.serviceP.listMyLost = new Array();
    this.serviceP.listMyFound = new Array();
    this.getMyitem();


  }
  delete(id: number) {
    if (confirm("Are you sure to delete ")) {
      console.log("Implement delete functionality here");
      this.serviceI.deleteItem(id).subscribe(
        myData => {
          this.update();
        },
        err => { debugger; console.log(err) })
    }

  }
  update() {
    this.serviceF.getF().subscribe(
      myData => {
        this.serviceF.listFound = myData
      },
      err => { debugger; console.log(err) })


    this.serviceL.getL().subscribe(
      myData => {
        this.serviceL.listLost = myData
      },
      err => { debugger; console.log(err) })
    this.getMyitem();
  }

  getMyitem() {
    //כאשר המשתמש עדיין לא נכנס הוא מועבר ללוגין
    if (this.serviceP.user == null)
      this.router.navigate(['/login'])

    else {
      this.serviceI.getItemByUser().subscribe(
        myData => {
          this.serviceP.listMyItem = myData;
          this.serviceP.listMyFound = this.serviceP.listMyItem.filter(i => i.ForL == 'found');
          this.serviceP.listMyLost = this.serviceP.listMyItem.filter(i => i.ForL == 'lost');
          this.dataSource=   this.serviceP.listMyFound;
          this.dataSourceLost=   this.serviceP.listMyLost;
          console.log(myData);
        },
        err => { console.log(err) })

    }
  }
  editUser() {
    // this.hiddenEdit=false;
    this.router.navigate(['/EditUser']);
  }
  editItem(itemId: number) {
    console.log(this.serviceP.listMyItem)
    this.router.navigate(['/EditItem/', itemId]);
  }
  searchItem(itemId: number) {



  }


  
  listCategoryot:ClassCategories[]=new Array<ClassCategories>();
  categorya:ClassCategories
  KTI:ClassKriterion_to_item;
  searchOrEditItem(itemId:number)
  {
  

    this.serviceI.i=this.serviceP.listMyFound.find(x=>x.item_id==itemId)
    if(this.serviceI.i==null)
    this.serviceI.i=this.serviceP.listMyLost.find(x=>x.item_id==itemId)
    console.log("this.serviceI.i.date_found_lost"+this.serviceI.i.date_found_lost)
    this.serviceI.date=this.serviceI.i.date_found_lost.toString()
        console.log("this.serviceI.i.date_found_lost"+this.serviceI.i.date_found_lost)
    // this.serviceI.newItem.date_found_lost=this.serviceI.i.date_found_lost

      // this.serviceI.newItem.comment=this.serviceI.i.comment
      // this.serviceI.newItem.ForL=this.serviceI.i.ForL
      // this.serviceI.newItem.nameAddress=this.serviceI.i.nameAddress
      this.serviceI.newItem=new ClassItem();
      this.serviceI.newItem = { ...this.serviceI.i };



    this.categorya=this.serviceC.listCategories.find(c=>c.category_id==this.serviceI.i.categoriy_id)
    this.serviceC.categoryHight=this.categorya.category_id
    this.listCategoryot.push(this.categorya)
    while(this.categorya.code_category_hight!=1 )
     {
    this.categorya=this.serviceC.listCategories.find(c=>c.category_id==this.categorya.code_category_hight)
    this.listCategoryot.push(this.categorya)
     }
    //  this.serviceI.date=this.serviceI.newItem.date_found_lost.toISOString().substring(0,10)
    this.router.navigate(['/form',itemId]);
      this.serviceK.getKriterionByCategoryId(this.listCategoryot).subscribe(
        myData => {
          this.serviceK.listKriterion = myData, console.log(myData)
         
        },
        err => { console.log(err) })
        this.serviceC.selectCategory=this.listCategoryot
        this.listCategoryot=new Array<ClassCategories>();
    
  }
}
