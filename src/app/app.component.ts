import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'labs-angular-card-view';
  items = [{type: 'user'}, {type: 'contract'}, {}];
}
