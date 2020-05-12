import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {
 roles: SelectItem[];
  selectedRole: SelectItem;

  constructor() {
    this.roles = [
      { label: "Select Role", value: null },
      { label: "Admin", value: 1 },
      { label: "SuperAdmin", value: 2 },
      { label: "User", value: 3 }
    ];
  }

  ngOnInit() {}
}