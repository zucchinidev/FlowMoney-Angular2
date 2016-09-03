import {Component, OnInit, provide} from '@angular/core';
import {TypesOfMovements} from '../shared/enums/typesOfMovements';
import {MovementService, MovementModel} from '../shared';


@Component({
  moduleId: module.id,
  selector: 'app-movement',
  templateUrl: 'movement.component.html',
  styleUrls: ['movement.component.css'],
  providers: [
    provide(MovementService, {useClass: MovementService}),
    provide(MovementModel, {useFactory: () => MovementModel.create()})
  ]
})
export class MovementComponent implements OnInit {
  public incomeCategories: string[];
  public expenditureCategories: string[];
  public movements: MovementModel[];
  public order: number;
  public income: number;
  public expense: number;
  public balance: number;

  constructor(private movementService: MovementService, public movement: MovementModel) {

  }

  ngOnInit(): any {
    this.incomeCategories = this.movementService.incomeCategories;
    this.expenditureCategories = this.movementService.expenditureCategories;
    this.movements = this.movementService.movements;
    this.order = MovementService.ORDER.ASC;
  }

  save(): void {
    this.movementService.registerMovement(this.movement);
    this.income = this.movementService.income;
    this.expense = this.movementService.expense;
    this.balance = this.movementService.balance;
    this.movement = MovementModel.create();
  }

  orderBy(field: string): void {
    this.order = -1 * this.order;
    this.movementService.sortMovements(field, this.order);
  }

  getDate(stringDate: string): Date {
    return new Date(stringDate);
  }

  getEntryValue(): number {
    return TypesOfMovements.Entry;
  }

  getExpenseValue(): number {
    return TypesOfMovements.Expense;
  }

  getTypeText(type: number): string {
    return MovementModel.getTypeText(type);
  }

  getEntryText(): string {
    return this.getTypeText(TypesOfMovements.Entry);
  }

  getExpenseText(): string {
    return this.getTypeText(TypesOfMovements.Expense);
  }

  onChangeType(event): void {
    this.movement.type = parseInt(event.currentTarget.value, 10);
  }

  isNegativeBalance(): boolean {
    return this.movementService.isNegativeBalance();
  }
}
