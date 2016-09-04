import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MovementService} from '../../shared/movement.service';
import {MovementModel} from '../../shared/model/MovementModel';

@Component({
  moduleId: module.id,
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css']
})
export class ListComponent implements OnInit {
  public movements: MovementModel[];
  public order: number;

  @Output() selectMovement: EventEmitter<MovementModel> = new EventEmitter();

  constructor(private movementService: MovementService) {
  }

  ngOnInit() {
    this.order = MovementService.ORDER.ASC;
    this.movements = this.movementService.movements;
  }

  orderBy(field: string): void {
    this.order = -1 * this.order;
    this.movementService.sortMovements(field, this.order);
  }

  select(movement: MovementModel): void {
    this.selectMovement.emit(movement);
  }

  isEntry(type): boolean {
    return this.movementService.isEntry(type);
  }

  getTypeText(type: number): string {
    return MovementService.getTypeText(type);
  }

  getDate(stringDate: string): Date {
    return new Date(stringDate);
  }
}
