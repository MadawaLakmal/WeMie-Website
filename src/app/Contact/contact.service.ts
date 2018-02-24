import { Injectable } from "@angular/core";
import { Http, Headers,Response , RequestOptions,Request} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()


export class ContactService {

    constructor(private  http:Http) {}

    addContactDetails (contactDetails) {

        let headers = new Headers();
        headers.append('Accept','application/json');

        let options = new RequestOptions({
            headers:headers
        })

        return this.http.post('http://127.0.0.1:1337/add',contactDetails,options).map(
            (res:Response) => res.json()
        )



    }

}