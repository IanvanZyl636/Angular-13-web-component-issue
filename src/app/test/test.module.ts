import {NgModule} from "@angular/core";
import {TestComponent} from "./test.component";
import {RouterModule} from "@angular/router";
import {TestService} from "./test.service";
import {TESTERTOKEN} from "../token";

@NgModule({
  declarations:[
    TestComponent
  ],
  imports:[
    RouterModule.forChild([
      {
        path:'',
        component:TestComponent
      }
    ])
  ],
  providers:[
    TestService,
    {
      provide:TESTERTOKEN,
      useValue:'a234234'
    }
  ]
})
export class TestModule{}
