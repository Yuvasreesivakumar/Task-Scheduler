import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AloginComponent } from './alogin/alogin.component';
import { SloginComponent } from './slogin/slogin.component';
import { FormsModule,NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SdComponent } from './sd/sd.component';
import { AdComponent } from './ad/ad.component';


@NgModule({
  declarations: [
    AppComponent,
    AloginComponent,
    SloginComponent,
    SdComponent,
    AdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
