import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AloginComponent } from './alogin/alogin.component';
import { SloginComponent } from './slogin/slogin.component';
import { SdComponent } from './sd/sd.component';
import { AdComponent } from './ad/ad.component';

const routes: Routes = [
  {
    path:'',
    component: SloginComponent
  },
  {
    path:'al',
    component:AloginComponent
  },
  {
    path:'student/:id',
    component:SdComponent
  },
  {
    path:'ad',
    component:AdComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
