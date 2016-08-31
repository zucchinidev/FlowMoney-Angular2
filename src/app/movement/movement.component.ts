import {Component, OnInit} from '@angular/core';
import {TypesOfMovements} from '../shared/enums/typesOfMovements';
import {MovementService, MovementModel} from '../shared';


@Component({
  moduleId: module.id,
  selector: 'app-movement',
  templateUrl: 'movement.component.html',
  styleUrls: ['movement.component.css'],
  providers: [MovementService]
})
export class MovementComponent implements OnInit {
  static order = {
    ASC: 1,
    DESC: -1
  };

  public movement: MovementModel;
  public incomeCategories: string[];
  public expenditureCategories: string[];
  public movements: MovementModel[];
  public order: number;
  public income: number;
  public expense: number;
  public balance: number;

  constructor(private movementService: MovementService) {

  }

  ngOnInit(): any {
    this.incomeCategories = this.movementService.incomeCategories;
    this.expenditureCategories = this.movementService.expenditureCategories;
    this.movement = new MovementModel();
    this.movements = [];
    this.order = MovementComponent.order.ASC;
  }

  save(): void {
    this.movementService.registerMovement(this.movement);
    this.income = this.movementService.income;
    this.expense = this.movementService.expense;
    this.balance = this.movementService.balance;
    this.movements.push(MovementModel.createFromMovement(this.movement));
  }

  orderBy(field: string): void {
    this.order = -1 * this.order;
    this.movements.sort((a, b) => a[field] < b[field] ? this.order : -1 * this.order);
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
