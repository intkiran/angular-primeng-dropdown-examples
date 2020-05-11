import { Component } from "@angular/core";
import { MessageService } from "primeng";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  constructor() {}
}
