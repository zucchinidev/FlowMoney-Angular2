import { Component } from '@angular/core';
import {MovementComponent} from './movement/movement.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app-root.component.html',
  styleUrls: ['app-root.component.css'],
  directives: [MovementComponent]
})
export class FlowMoneyComponent {
  title = 'app works!';
}
