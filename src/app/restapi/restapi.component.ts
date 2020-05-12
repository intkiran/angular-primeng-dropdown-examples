import { Component, OnInit } from "@angular/core";
import { CountryService } from "../../country.service";
import { Country } from "./country";

@Component({
  selector: "app-restapi",
  templateUrl: "./restapi.component.html",
  styleUrls: ["./restapi.component.css"]
})
export class RestapiComponent implements OnInit {
  countries: Country[];
  selectedCountry: Country;
  constructor(public countryService: CountryService) {}

  ngOnInit() {
    this.countryService.getJSON().subscribe(data => {
      this.countries = data;
      console.log('kiran',this.countries);
    });
  }
}
