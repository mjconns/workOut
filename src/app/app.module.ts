//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Other
import { routing } from './app.routing';

//Material
import { AppMaterialModule } from '../app/modules/app-material/app-material.module';
import { HomeComponent } from './component/home/home.component';

//Services

//Components

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    routing

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }
