import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSongsComponent } from './add-songs/add-songs.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',component:HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-songs',component:AddSongsComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
