/**
 * Created by Ishan on 11/18/2017.
 */
import {Injectable} from '@angular/core';
import {AboutUs} from "./about-us";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

Injectable();

export class AboutUsService{

    memberDetails():Observable<{}>{
        let about_us = new AboutUs();
        let details = about_us.getTeamMemberDetails();
        return of(details);

}
}

