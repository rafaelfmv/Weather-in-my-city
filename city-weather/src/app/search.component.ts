
import { Component } from "@angular/core";
import { SearchService } from "./search.service";
import { Http, Response } from "@angular/http";
import { RouterModule, Routes, ActivatedRoute, Router } from '@angular/router';

import 'rxjs/add/operator/map';

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {
    private apiSearchCityUrl;
    dataSearchCity: any = {};

    constructor(
        private http: Http,
        private router: Router
    ) {
        
    }
    cityNameValue = '';

    onEnter(value: string) {         
        this.cityNameValue = value; 
        console.log(this.cityNameValue); 
        this.router.navigate(['./city-name/'+this.cityNameValue]);
        
    }

    

}