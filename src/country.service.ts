import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Country } from "./app/restapi/country";
@Injectable()
export class CountryService {
  constructor(private http: HttpClient) {}

  public getJSON(): Observable<Country> {
    return this.http.get("./assets/countries.json");
  }
}
