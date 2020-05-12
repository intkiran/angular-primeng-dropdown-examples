import { Component, OnInit } from "@angular/core";
import { CountryService } from "../../country.service";
export interface Country{
  name:string;
  code:string;
}
@Component({
  selector: "app-restapi",
  templateUrl: "./restapi.component.html",
  styleUrls: ["./restapi.component.css"]
})
export class RestapiComponent implements OnInit {
 countries:Country[];

  constructor(public countryService: CountryService) {}

  ngOnInit() {
    this.countryService.getJSON().subscribe(data => {
      this.countries=data;
      console.log(data);
    });
  }
}
