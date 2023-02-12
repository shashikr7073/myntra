import { ProfileComponent } from './profile/profile.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:MenComponent,
  },
  {
    path:'women',
    component:WomenComponent
  },
  {
    path:'profile',
    component:ProfileComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
