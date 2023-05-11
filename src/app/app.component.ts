import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
    const hashRoute = location.hash.substring(2);
    this.router.navigateByUrl(hashRoute);
  }
}
