import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class CountryService {
   constructor(private http: HttpClient) {
        this.getJSON().subscribe(data => {
            console.log(data);
        });
    }

    public getJSON(): Observable<any> {
        return this.http.get("./assets/countries.json");
    }
}
