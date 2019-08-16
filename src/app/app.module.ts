import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonarComponent } from './donar/donar.component';
import { CserviciosComponent } from './cservicios/cservicios.component';

@NgModule({
  declarations: [
    AppComponent,
    DonarComponent,
    CserviciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
