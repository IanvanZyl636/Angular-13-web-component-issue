import {Inject, Injectable, Optional} from "@angular/core";
import {TESTERTOKEN} from "../token";


@Injectable({
  providedIn: 'root'
})
export class TestService{
  constructor(@Optional()@Inject(TESTERTOKEN) asd:string) {
    const pop = asd;
  }
}
