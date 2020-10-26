import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from '../../Fservice/Scategory/categories.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  //מקבל קוד קטגוריה
  @Input() id:number;
  //ושם קטגוריה
  @Input() name:string;
  
  constructor(private serviceC:CategoriesService) { }

  ngOnInit() {
    
  }

}
