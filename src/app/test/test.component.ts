import {Component} from "@angular/core";
import {TestService} from "./test.service";

@Component({
  templateUrl:'./test.component.html',
  selector:'bb-test'
})
export class TestComponent{
  constructor(testService:TestService) {

  }
}
