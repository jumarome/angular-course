import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-project';
  activeComponent: string = 'recipes';


  handleMenuSelection($event: { menu: string }) {
    this.activeComponent = $event.menu;
  }
}
