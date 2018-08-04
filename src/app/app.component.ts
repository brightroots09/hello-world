import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World!';
  public name = "App Component"

  public jsonObj = {
    "name": "Angular",
    "versione": "6"
  }

  public date = new Date()

}
