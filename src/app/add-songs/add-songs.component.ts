import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-add-songs',
  templateUrl: './add-songs.component.html',
  styleUrls: ['./add-songs.component.css']
})
export class AddSongsComponent implements OnInit {
   ArtistsList = ["car","jeep"];
  constructor(private router: Router) { }
 

  ngOnInit(): void {
  }

  
  gotohome(){
    this.router.navigate(['home']);
  }


}
