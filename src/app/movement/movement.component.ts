import {Component, OnInit} from '@angular/core';

import Category from './model/Category';
import {Movement} from './model/Movement';
import {TypesOfMovements} from './enums/typesOfMovements';


@Component({
  moduleId: module.id,
  selector: 'app-movement',
  templateUrl: 'movement.component.html',
  styleUrls: ['movement.component.css']
})
export class MovementComponent implements OnInit {
  static order = {
    ASC: 1,
    DESC: -1
  };

  public movement: Movement;
  public incomeCategories: string[];
  public expenditureCategories: string[];
  public movements: Movement[];
  public order: number;
  public income: number;
  public expense: number;

  public balance: number;

  ngOnInit(): any {
    this.incomeCategories = Category.getIncomeCategories();
    this.expenditureCategories = Category.getExpenditureCategories();
    this.income = 0;
    this.expense = 0;
    this.movement = new Movement();
    this.movements = [];
    this.order = MovementComponent.order.ASC;
  }

  save(): void {
    if (this.movement.isIncome()) {
      this.income += this.movement.amount;
    } else {
      this.expense += this.movement.amount;
    }
    this.balance = this.calculateBalance();
    this.movements.push(new Movement({
      type: this.movement.type,
      id: this.movement.id,
      category: this.movement.category,
      date: this.movement.date,
      amount: this.movement.amount
    }));
  }

  orderBy(field: string): void {
    this.order = -1 * this.order;
    this.movements.sort((a, b) => a[field] < b[field] ? this.order : -1 * this.order);
  }

  getDate(stringDate: string): Date {
    return new Date(stringDate);
  }

  movementIsIncome() {
    return this.movement.isIncome();
  }

  getEntryValue(): number {
    return TypesOfMovements.Entry;
  }

  getExpenseValue(): number {
    return TypesOfMovements.Expense;
  }

  onChangeType(event): void {
    this.movement.type = parseInt(event.currentTarget.value, 10);
  }

  private calculateBalance() {
    return this.income - this.expense;
  }
}
