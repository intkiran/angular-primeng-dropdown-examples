import { Component, OnInit } from "@angular/core";
import { SelectItem } from "primeng";

@Component({
  selector: "app-basic-dropdown",
  templateUrl: "./basic-dropdown.component.html",
  styleUrls: ["./basic-dropdown.component.css"]
})
export class BasicDropdownComponent implements OnInit {
  employes: SelectItem[];
  selectedEmploye: SelectItem;

  constructor() {
    this.employes = [
      { label: "Select Employee", value: null },
      { label: "Franc", value: 1 },
      { label: "Kiran", value: 2 },
      { label: "John", value: 3 }
    ];
  }

  ngOnInit() {}
}
