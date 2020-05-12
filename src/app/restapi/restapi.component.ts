import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../country.service';

@Component({
  selector: 'app-restapi',
  templateUrl: './restapi.component.html',
  styleUrls: ['./restapi.component.css']
})
export class RestapiComponent implements OnInit {

  constructor(public countryService:CountryService) { }

ngOnInit(){
       this.countryService.getJSON().subscribe(data => {
            console.log(data);
        });
   }


}