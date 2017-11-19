import { AppComponent } from "../app.component";
import { Component } from '@angular/core';
import {HeaderService} from "./header.service";

@Component({
    selector:'header-nav',
    templateUrl:'./header.component.html',
    providers:[HeaderService]

})

export class HeaderComponent{
    navigation_items = [];
    constructor(private headerService:HeaderService){}

    ngOnInit(){
        this.setNavigation();
    }
    setNavigation(){
        this.headerService.getNavigationItems().subscribe(data=>this.navigation_items=data);
    }
}