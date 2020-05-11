import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng';

@Component({
  selector: 'app-basic-dropdown',
  templateUrl: './basic-dropdown.component.html',
  styleUrls: ['./basic-dropdown.component.css']
})

export class BasicDropdownComponent implements OnInit {
  employes: SelectItem[];
  selectedEmploye: SelectItem;


  constructor() {     
    this.employes = [
      {label:'Select Employee', value:null},
      {label:'Franc', value:1},
      {label:'Kiran', value:2},
      {label:'John', value:3},
    ];
        this.empList = [
      {name:'Select Employee', id:null},
      {name:'Franc', id:1},
      {name:'Kiran', id:2},
      {name:'John', id:3},
    ];
}

  ngOnInit() {
  }

}