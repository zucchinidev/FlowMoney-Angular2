import {Component, OnInit, provide} from '@angular/core';
import {MovementService, MovementModel} from '../shared';
import {EditorComponent} from './editor';
import {ListComponent} from './list';
import {IAccountingCost} from '../shared/intefaces/IAccountingCost';

@Component({
  moduleId: module.id,
  selector: 'app-movement',
  templateUrl: 'movement.component.html',
  styleUrls: ['movement.component.css'],
  directives: [EditorComponent, ListComponent],
  providers: [
    provide(MovementService, {useClass: MovementService}),
    provide(MovementModel, {useFactory: () => MovementModel.create()})
  ]
})
export class MovementComponent implements OnInit {
  public accountingCost: IAccountingCost;


  constructor(private movementService: MovementService, public movement: MovementModel) {

  }

  ngOnInit(): any {
    this.accountingCost = this.movementService.accountingCost;
  }


  isNegativeBalance(): boolean {
    return this.movementService.isNegativeBalance();
  }

  onSelectMovement(selectedMovement: MovementModel): void {
    this.movement = selectedMovement;
  }
}
