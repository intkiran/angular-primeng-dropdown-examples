import { Component, OnInit } from "@angular/core";
export interface Employee {
  name: string;
  id: number;
}
@Component({
  selector: "app-optionlabel",
  templateUrl: "./optionlabel.component.html",
  styleUrls: ["./optionlabel.component.css"]
})
export class OptionlabelComponent implements OnInit {
  empList: Employee[];
  selectedEmploye1: Employee;

  constructor() {
    this.empList = [
      { name: "Select Employee", id: null },
      { name: "Franc", id: 1 },
      { name: "Kiran", id: 2 },
      { name: "John", id: 3 }
    ];
  }
  ngOnInit() {}
}
