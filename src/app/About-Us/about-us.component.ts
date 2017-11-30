/**
 * Created by Ishan on 11/18/2017.
 */
import { AppComponent } from '../app.component';
import { Component } from '@angular/core';
import {AboutUsService} from "./about-us.service";
import {map} from "rxjs/operator/map";

@Component({
    selector:'about-us',
    templateUrl:'./about-us.component.html',
    providers:[AboutUsService]
})

export class AboutUsComponent {
    team_member_details = {};
    constructor(private aboutUsService:AboutUsService){}

    ngOnInit(){
        this.getMemberDetails();
    }

    getMemberDetails(){
        this.aboutUsService.memberDetails().subscribe(data=>this.team_member_details=data);
    }
}