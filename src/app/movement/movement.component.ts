import {Component, OnInit, provide} from '@angular/core';
import {MovementService, MovementModel} from '../shared';
import {EditorComponent} from './editor';
import {ListComponent} from './list';
import {IAccountingCost} from '../shared/intefaces';
import {AccountingCostComponent} from './accounting-cost/accounting-cost.component';

@Component({
  moduleId: module.id,
  selector: 'app-movement',
  templateUrl: 'movement.component.html',
  styleUrls: ['movement.component.css'],
  directives: [EditorComponent, ListComponent, AccountingCostComponent],
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

  onSelectMovement(selectedMovement: MovementModel): void {
    this.movement = selectedMovement;
  }
}
