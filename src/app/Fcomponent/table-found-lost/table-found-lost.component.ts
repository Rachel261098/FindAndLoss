import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FoundService } from 'src/app/Fservice/Sfound/found.service';
import { LostService } from 'src/app/Fservice/Slost/lost.service';
import { ClassMail } from 'src/app/Fclasses/ClassMail';
import { ItemService } from 'src/app/Fservice/Sitem/item.service';
import { PersonService } from 'src/app/Fservice/Sperson/person.service';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { ClassFound } from 'src/app/Fclasses/ClassFound';
import { ClassLost } from 'src/app/Fclasses/ClassLost';

@Component({
  selector: 'app-table-found-lost',
  templateUrl: './table-found-lost.component.html',
  styleUrls: ['./table-found-lost.component.css']
})
export class TableFoundLostComponent implements OnInit {

  constructor(private serviceI: ItemService, private serviceP: PersonService, private route: ActivatedRoute, private serviceF: FoundService, private serviceL: LostService) { }
  type: string
  mail: ClassMail = new ClassMail;
  
  
  ngOnInit() {
    
    this.route.params
      .subscribe((paramsFromUrl: Params) => {
        //urlמציב במשתנה מאיפה  הגיע דרך ה 
        this.type = paramsFromUrl.LorF;
        console.log(paramsFromUrl.LorF)
        
        this.lat =0
        this.lng=0

      });
      this.NameAddress="";
  
  }
  cancel()
  {
    this.textMail=!this.textMail
    this.mail.message=""
  }
  sendMail() {
    this.mail.mailFrom = this.serviceP.user.mail;
    this.textMail = false;
    this.serviceI.sendMail(this.mail).subscribe(
      myData => {
        alert("המייל נשלח בהצלחה");
        this.mail.message=""
      },
      err => { })
  }
  textMail: boolean = false;
  displyTextdMail(mail: string) {
    this.mail.mailTo = mail;
    this.textMail = true;
  }

  lat:number
  lng:number
  NameAddress:string
  distance:number
  filter(address: Address) {
    debugger
     this.lat = address.geometry.location.lat();
     this.lng = address.geometry.location.lng();
    if (this.type == 'found') 
    {
      this.serviceF.listFound=this.serviceF.list.map(x => Object.assign({}, x))
      
      debugger
      for (var i = 0; i < this.serviceF.list.length; i++) {
        debugger
        console.log(this.serviceF.list[i].lat+"   "+ this.serviceF.list[i].lng);
        
         this.distance = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(this.lat, this.lng), new google.maps.LatLng(this.serviceF.list[i].lat, this.serviceF.list[i].lng));
        if (this.distance > 500) {
          console.log(this.distance);
console.log(this.serviceF.list[i].nameAddress);

          debugger
          let index=this.serviceF.listFound.findIndex(x=>x.item_id===this.serviceF.list[i].item_id)
          console.log(index);
          
          this.serviceF.listFound.splice(index, 1)
        }
      }
    }
    else {
      this.serviceL.listLost = this.serviceL.list.map(x => Object.assign({}, x))

      for (let i = 0; i < this.serviceL.list.length; i++) {
         this.distance = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(this.serviceL.list[i].lat, this.serviceL.list[i].lng), new google.maps.LatLng(this.lat, this.lng));
        if (this.distance > 500) {
          console.log(this.distance);
          let index=this.serviceL.listLost.findIndex(x=>x.item_id===this.serviceL.list[i].item_id)
          this.serviceL.listLost.splice(index, 1)
          debugger
        }
      }
    }
  }
}
