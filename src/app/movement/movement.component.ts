import {Component, OnInit, provide} from '@angular/core';
import {TypesOfMovements} from '../shared/enums/typesOfMovements';
import {MovementService, MovementModel} from '../shared';
import {EditorComponent} from './editor';
import {IAccountingCost} from '../shared/intefaces/IAccountingCost';

@Component({
  moduleId: module.id,
  selector: 'app-movement',
  templateUrl: 'movement.component.html',
  styleUrls: ['movement.component.css'],
  directives: [EditorComponent],
  providers: [
    provide(MovementService, {useClass: MovementService}),
    provide(MovementModel, {useFactory: () => MovementModel.create()})
  ]
})
export class MovementComponent implements OnInit {
  public movements: MovementModel[];
  public order: number;
  public typeEntry: TypesOfMovements;
  public typeExpense: TypesOfMovements;
  public accountingCost: IAccountingCost;


  constructor(private movementService: MovementService, public movement: MovementModel) {

  }

  ngOnInit(): any {
    this.movements = this.movementService.movements;
    this.order = MovementService.ORDER.ASC;
    this.typeEntry = this.movementService.typeEntry;
    this.typeExpense = this.movementService.typeExpense;
    this.accountingCost = this.movementService.accountingCost;
  }

  orderBy(field: string): void {
    this.order = -1 * this.order;
    this.movementService.sortMovements(field, this.order);
  }

  getDate(stringDate: string): Date {
    return new Date(stringDate);
  }

  getTypeText(type: number): string {
    return MovementService.getTypeText(type);
  }

  isNegativeBalance(): boolean {
    return this.movementService.isNegativeBalance();
  }
}
