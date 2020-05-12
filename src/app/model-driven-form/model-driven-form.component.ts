import { Component, OnInit } from "@angular/core";
import { SelectItem } from "primeng";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-model-driven-form",
  templateUrl: "./model-driven-form.component.html",
  styleUrls: ["./model-driven-form.component.css"]
})
export class ModelDrivenFormComponent implements OnInit {
  roles: SelectItem[];
  selectedRole: SelectItem;
  myform: any;
  constructor(private formBuilder: FormBuilder) {
    //initialize user form
    this.myform = this.formBuilder.group({
      name: ["", Validators.required],
      selectedRole: ["", Validators.required]
    });

    this.roles = [
      { label: "Select Role", value: null },
      { label: "Admin", value: 1 },
      { label: "SuperAdmin", value: 2 },
      { label: "User", value: 3 }
    ];
  }

  ngOnInit() {}
  storeUserInfo() {
    if (this.myform.dirty && this.myform.valid) {
      alert(
        `Name: ${this.myform.value.name} Email: ${this.myform.value.email}`
      );
    }
  }
}
