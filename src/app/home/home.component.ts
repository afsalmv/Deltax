import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentRate = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  AddNewSongs(){
    this.router.navigate(['add-songs']);
  }

}
