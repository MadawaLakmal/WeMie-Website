import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './Home/home.component';


import { AppComponent } from './app.component';
import {HeaderComponent} from "./Header/header.component";
import {AboutUsComponent} from "./About-Us/about-us.component";
import {FooterComponent} from "./Footer/footer.component";
import {ContactComponent} from "./Contact/contact.component";
import { HttpModule } from "@angular/http";
import { FormsModule , ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutUsComponent,
    ContactComponent,
FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
