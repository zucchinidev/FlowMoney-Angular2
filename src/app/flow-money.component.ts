import { Component } from '@angular/core';
import {MovementComponent} from './movement/movement.component';

@Component({
  moduleId: module.id,
  selector: 'flow-money',
  templateUrl: 'flow-money.component.html',
  styleUrls: ['flow-money.component.css'],
  directives: [MovementComponent]
})
export class FlowMoneyComponent {
  title = 'flow-money works!';
}
