import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {
 roles: SelectItem[];
  selectedRole: SelectItem;
userForm: any;
  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({selecteselectedRoledCity: ['']));

    this.roles = [
      { label: "Select Role", value: null },
      { label: "Admin", value: 1 },
      { label: "SuperAdmin", value: 2 },
      { label: "User", value: 3 }
    ];
  }

  ngOnInit() {}
}