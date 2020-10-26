import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { PersonService } from '../Fservice/Sperson/person.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private serviceP: PersonService) { }
  ngOnInit(): void {
    this.router.navigate(['/firstHome'])

  }
}
