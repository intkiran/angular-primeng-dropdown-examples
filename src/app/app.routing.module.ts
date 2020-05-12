import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { BasicDropdownComponent } from "./basic-dropdown/basic-dropdown.component";
import { OptionlabelComponent } from "./optionlabel/optionlabel.component";
import { RestapiComponent } from "./restapi/restapi.component";
import { ModelDrivenFormComponent } from "./model-driven-form/model-driven-form.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: "basic", component: BasicDropdownComponent },
      { path: "customlabel", component: OptionlabelComponent },
      { path: "restapi", component: RestapiComponent },
      { path: "modelform", component: ModelDrivenFormComponent }
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
