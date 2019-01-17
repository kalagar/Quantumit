import { Component } from '@angular/core';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quantumit';
  constructor(private _servicesService: ServicesService) {}

  setItemsToLocalStorage() {
    this._servicesService.setItemsToLocalStorage();
  }
}
