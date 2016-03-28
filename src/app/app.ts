import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

@Component({
  selector: "sandbox-app",
  templateUrl: "src/app/app.html",
  styleUrls: ["src/app.css"],
  directives: [
   
  ]
})
export class SandboxApp {
  title: string = "Main Panel";
}
bootstrap(SandboxApp).catch(err => console.error(err));