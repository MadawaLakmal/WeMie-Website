import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './Home/home.component';


import { AppComponent } from './app.component';
import {HeaderComponent} from "./Header/header.component";
import {AboutUsComponent} from "./About-Us/about-us.component";
import {FooterComponent} from "./Footer/footer.component";
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutUsComponent,
    FooterComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
