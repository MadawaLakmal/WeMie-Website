import {Injectable, Injector} from '@angular/core';
import { Header } from './header';
import {Observable} from 'rxjs/Observable';
import  { of } from  'rxjs/observable/of';

Injectable();

export  class HeaderService {
     getNavigationItems():Observable<string[]>{
        let header_items =  [
            "home",
            "services",
            "features",
            "work",
            "team",
            "pricing",
            "blog",
            "contact"
        ];
        return of(header_items);
     }
}

