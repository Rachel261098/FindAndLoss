import { Component, OnInit, Input, Output, Renderer, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { KriterionService } from '../../Fservice/Skriteionim/kriterion.service';
import { CategoriesService } from '../../Fservice/Scategory/categories.service';
import { ClassItem } from 'src/app/Fclasses/ClassItems';
import { PersonService } from '../../Fservice/Sperson/person.service';
import { ItemService } from '../../Fservice/Sitem/item.service';
import { KriterionToItemService } from '../../Fservice/Skriterion_to_item/kriterion-to-item.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import Swal from '../../../assets/scripts/sweetalert2@8.js'
import { LostService } from 'src/app/Fservice/Slost/lost.service';
import { FoundService } from 'src/app/Fservice/Sfound/found.service';
import { ClassMail } from 'src/app/Fclasses/ClassMail';
import { ClassKriterionim } from 'src/app/Fclasses/ClassKriterionim';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { addAllToArray } from '@angular/core/src/render3/util';
import { ClassPerson } from 'src/app/Fclasses/ClassPerson';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.css']
})
export class FormItemComponent implements OnInit {


  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private serviceKTI: KriterionToItemService, private serviceL: LostService, private serviceF: FoundService, private serviceP: PersonService, private serviceI: ItemService, private serviceK: KriterionService, private serviceC: CategoriesService) { }
  from: boolean
  again: number;



  title = 'Client';
  fileData: any;
  previewUrl: any;



  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
  }
  preview() {
    // Show preview 
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    }
  }
  saveImage() {
    this.serviceI.newItem.ForL=this.type
    //כאשר המשתמש עדיין לא נכנס הוא מועבר ללוגין
    if (this.serviceP.user == null)
      this.router.navigate(['/login'])
    else {
      //this.checkPlace();
      
      if (this.messageFullPlace == false) {
        
        this.serviceI.newItem.categoriy_id = this.serviceC.categoryHight;
        this.serviceI.newItem.person_id = this.serviceP.user.person_id;
        this.serviceI.newItem.listKriterion = this.serviceKTI.listKriterionToItem;
        // this.serviceI.newItem.date_found_lost=new Date(this.serviceI.date);
        this.serviceI.newItem.report_date = new Date();

        this.serviceI.saveImage( this.serviceI.newItem, this.fileData).subscribe(

          myData => {
            debugger
            if (this.serviceP.listPerson.length != 0)

              this.serviceI.sendMailToPersons(this.type, this.serviceP.listPerson).subscribe(
                myData => { },
                err => { }
              )
            this.router.navigate(['/MyDashboard'])
            this.serviceI.newItem.item_id = myData, console.log(this.serviceI.newItem),
              this.serviceI.date = null
            Swal.fire({
              type: 'success',
              title: 'הנתונים נשמרו בהצלחה!',
              showConfirmButton: false,
              timer: 1500
            })

            this.serviceL.getL().subscribe(
              myData => {
                this.serviceL.listLost = myData,
                  this.serviceL.list = myData, console.log(myData)
              },
              err => { console.log(err) })



            this.serviceF.getF().subscribe(
              myData => {
                this.serviceF.listFound = myData,
                  this.serviceF.list = myData,
                  console.log(myData)
              },
              err => { console.log(err) })
          },
          err => { })
      }
    }




    // this.serviceI.saveImage(this.type, this.serviceI.newItem, this.fileData).subscribe(
    //   data => { alert("success " + data); },
    //   err => { alert(err.message) })
  }













  ngOnInit() {

    this.serviceP.listPerson = new Array();
    this.again = 0;
    this.serviceI.place = new Address()
    this.serviceI.place.name = ""
    // this.serviceI.date=new Date().toISOString().substring(0,10)
    console.log("FormItemComponent this.serviceKTI.listEzer" + this.serviceKTI.listEzer.forEach(i => console.log(i)));
    this.serviceK.displayNewKriteion = false;//משתנה של הצגת קריטריון חדש
    this.serviceP.noPerson = false;
    this.route.params
      .subscribe((paramsFromUrl: Params) => {
        this.again = paramsFromUrl.item
        if (this.again > 0) {

          this.serviceKTI.countKriteionToEdit = 0;
          // this.serviceKTI.listKriterionToItem=new Array();
          this.serviceKTI.listKTIedit = this.serviceI.i.listKriterion;
          console.log(" this.serviceKTI.listKTIedit "+ this.serviceKTI.listKTIedit );
          
          this.serviceI.place.name = this.serviceI.newItem.nameAddress
          this.from = true;
          this.type = this.serviceI.i.ForL
          debugger
        }
        else {
          this.from = false;
          this.serviceI.date = new Date().toISOString().substring(0, 10)
          this.serviceI.newItem.nameAddress = ""
        }

        this.serviceI.newItem.date_found_lost = new Date(this.serviceI.date);

        console.log(this.again + "    10101010101010")
      });


  }
  messageFullPlace = false;
  messageCheckDate = false;//הצגת הודעה על תאריך לא תקין
  messageFullDate = false;//הצגת הודעה אם לא מילא תאריך
  dispalySearch: boolean = true
  disabledSave: boolean = false;//לא מאפשר את כפתור שמירה לפני חיפוש
  mail: ClassMail = new ClassMail;
  listezer: ClassPerson[];
  @Input() type: string;//משתנה מאיפה הגיע מאבדה או מציאה לצורך שליחה לnew kriterion
  //סגירת הקומפוננטה להוספת קריטריון
  closeK(b: boolean) {
    debugger
    this.serviceK.displayNewKriteion = false;
    // this.serviceK.listKriterion = null;
    // //קורא לפונקציה שמביאה קריטריונים לפי קטגוריה
    // this.getKriterionByCodeCategory();

  }

  //הבאת כל המאפיינים המתאימים לחפץ
  getKriterionByCodeCategory() {
    this.serviceK.getKriterionByCategoryId(this.serviceC.selectCategory).subscribe(
      myData => {
        this.serviceK.listKriterion = myData, console.log(myData)
      },
      err => { console.log(err) })
  }

  //שמירת הנתונים של החפץ
  save() {
    //כאשר המשתמש עדיין לא נכנס הוא מועבר ללוגין
    if (this.serviceP.user == null)
      this.router.navigate(['/login'])
    else {
      this.checkPlace();
      if (this.messageFullPlace == false) {
        this.serviceI.newItem.categoriy_id = this.serviceC.categoryHight;
        this.serviceI.newItem.person_id = this.serviceP.user.person_id;
        debugger
        this.serviceI.newItem.listKriterion = this.serviceKTI.listKriterionToItem;
        // this.serviceI.newItem.date_found_lost=new Date(this.serviceI.date);
        this.serviceI.newItem.report_date = new Date();
debugger

        this.serviceI.addItem(this.type, this.serviceI.newItem).subscribe(
          myData => {
            debugger
            if (this.serviceP.listPerson.length != 0)

              this.serviceI.sendMailToPersons(this.type, this.serviceP.listPerson).subscribe(
                myData => { },
                err => { }
              )
            this.router.navigate(['/MyDashboard'])
            this.serviceI.newItem.item_id = myData, console.log(this.serviceI.newItem),
              this.serviceI.date = null
            Swal.fire({
              type: 'success',
              title: 'הנתונים נשמרו בהצלחה!',
              showConfirmButton: false,
              timer: 1500
            })

            this.serviceL.getL().subscribe(
              myData => {
                this.serviceL.listLost = myData,
                  this.serviceL.list = myData, console.log(myData)
              },
              err => { console.log(err) })



            this.serviceF.getF().subscribe(
              myData => {
                this.serviceF.listFound = myData,
                  this.serviceF.list = myData,
                  console.log(myData)
              },
              err => { console.log(err) })
          },
          err => { })
      }
    }
  }
  checkPlace() {
    if (this.serviceI.place.name == "") {
      this.messageFullPlace = true;
      // place.focus()
      this.disabledSave = false;
      this.serviceI.newItem.lat = 0;

      console.log(this.serviceI.newItem.lat);
      debugger;

      this.serviceI.newItem.lng = 0;

      console.log(this.serviceI.newItem.lng);
      debugger;

      this.serviceI.newItem.nameAddress = "";

      console.log(this.serviceI.newItem.nameAddress);
      debugger;

    }
    else
      this.messageFullPlace = false;
    console.log(this.serviceI.place.name);

  }
  //פונקציית חיפוש
  search() {

     this.checkPlace();
     if(this.messageFullPlace == false)
     {
    this.dispalySearch = false
    this.serviceI.newItem.categoriy_id = this.serviceC.categoryHight;
    this.serviceI.newItem.person_id = this.serviceP.user.person_id;
    this.serviceI.newItem.listKriterion = this.serviceKTI.listKriterionToItem;

    this.serviceI.searchItem(this.type, this.serviceI.newItem).subscribe(

      myData => {
        this.serviceP.listPerson = myData;
        this.listezer = this.serviceP.listPerson.map(x => Object.assign({}, x))
        for (let x = 0; x < this.listezer.length; x++) {
          console.log("lat" + this.listezer[x].lat);
          console.log("lng" + this.listezer[x].lng);
          let distance = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(this.listezer[x].lat, this.listezer[x].lng), new google.maps.LatLng(this.serviceI.newItem.lat, this.serviceI.newItem.lng));
          if (distance > 500) {
            // const index=this.serviceP.listPerson.indexOf(this.serviceP.listPerson[x]);
            console.log(x);
            debugger
            let index = this.serviceP.listPerson.findIndex(y => y.item_id === this.listezer[x].item_id)
            this.serviceP.listPerson.splice(index, 1);
            console.log(this.serviceP.listPerson);
            debugger

          }
          console.log("מרחק:  ", distance);


        }

        this.mail.message = ""
        this.disabledSave = true;
        if (this.serviceP.listPerson.length === 0)
          this.serviceP.noPerson = true;
        else
          this.serviceP.noPerson = false;
        console.log(myData)
        this.dispalySearch = true
      },
      err => { })


  }
  }
  textMail: boolean = false;

  displyTextdMail(mail: string) {
    this.mail.mailTo = mail;
    this.textMail = true;
  }
  sendMail() {
    this.mail.mailFrom = this.serviceP.user.mail;
    this.textMail = false;
    this.serviceI.sendMail(this.mail).subscribe(

      myData => {
        alert("המייל נשלח בהצלחה");
      },
      err => { })
  }
  checkDate(date, date_found_lost) {
    this.serviceI.newItem.date_found_lost = new Date(this.serviceI.date);

    if (this.serviceI.newItem.date_found_lost == null) {
      this.messageFullDate = true;
      date_found_lost.focus()
      this.disabledSave = false;

    }
    else
      this.messageFullDate = false;
    debugger
    if (new Date(date) > (new Date)) {
      console.log("תאריך לא יכול להיות גדול מהיום!")
      date_found_lost.focus()
      this.messageCheckDate = true;
      this.disabledSave = false;

    }
    else
      this.messageCheckDate = false
  }
  cancel1() {
    this.textMail = !this.textMail
    this.mail.message = ""
  }
  startData() {
    this.serviceK.displayNewKriteion = true;
    this.serviceK.NewKriterion.category_id = 0;
    this.serviceK.NewKriterion.kriterion_id = 0;
    this.serviceK.NewKriterion.name = "";
    this.serviceK.NewKriterion.operator_id = 0;
    this.serviceK.NewKriterion.option_values = "";
    this.serviceK.NewKriterion.value_id = 0;

  }


  changeCategoryId(idCategory: number) {


    //דחיפת הקטגוריה למערך הקטגוריות שנבחרו
    this.serviceC.selectCategory.push(this.serviceC.listCategories.find(q => q.category_id === idCategory))

    this.serviceC.categoryHight = idCategory; //שינוי קטגורית העל
    //סינון הקטגוריות הבאות לפי קטגוריה זו
    this.serviceC.filterListCategories = this.serviceC.listCategories.filter(q => q.code_category_hight === idCategory)

    if (this.serviceC.filterListCategories.length === 0) //אם לקטגוריה זו אין ילדים...
    {
      this.getKriterionByCodeCategory();
      // this.hiddenTI=!this.hiddenTI;//הצגת טופס החפץ עם הקריטריונים


    }

  }



  public handleAddressChange(address: Address) {
    debugger;
    this.serviceI.place = address
    this.serviceI.newItem.lat = address.geometry.location.lat();

    console.log(this.serviceI.newItem.lat);
    debugger;

    this.serviceI.newItem.lng = address.geometry.location.lng();

    console.log(this.serviceI.newItem.lng);
    debugger;

    this.serviceI.newItem.nameAddress = address.formatted_address;

    console.log(this.serviceI.newItem.nameAddress);
    debugger;

    this.messageFullPlace = false

  }



  saveChange() {

    debugger
    this.serviceI.newItem.date_found_lost = new Date(this.serviceI.date);
    this.serviceI.newItem.categoriy_id = this.serviceC.categoryHight;
    this.serviceI.newItem.person_id = this.serviceP.user.person_id;
    this.serviceI.newItem.listKriterion = this.serviceKTI.listKriterionToItem;
    console.log(this.serviceI.newItem.listKriterion);

    this.serviceI.editItem(this.serviceI.newItem).subscribe(

      myData => {
        // this.serviceI.newItem.listKriterion = new Array();
        // this.serviceKTI.listKriterionToItem = new Array();

        debugger
        this.router.navigate(['/MyDashboard'])
        this.serviceKTI.listKriterionToItem=new Array();
        this.serviceI.i.listKriterion=new Array();
        
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
