import { Injectable } from '@angular/core';
import {TypesOfMovements, MovementModel, Category} from './';

@Injectable()
export class MovementService {
  public income: number;
  public expense: number;
  public balance: number;
  public incomeCategories: string[];
  public expenditureCategories: string[];

  constructor() {
    this.income = 0;
    this.expense = 0;
    this.balance = 0;
    this.incomeCategories = Category.getIncomeCategories();
    this.expenditureCategories = Category.getExpenditureCategories();
  }

  registerMovement(movement: MovementModel): void {
    try {
      const type = movement.type;
      const amount = movement.amount;
      this.annotateAmount(amount, type);
      this.calculateBalance();
    } catch (e) {
      // TODO SERVICE ERROR, WRITE LOGS ERRORS BACKEND
    }
  }

  isNegativeBalance(): boolean {
    return this.balance < 0;
  }

  private annotateAmount(amount: number, type: TypesOfMovements) {
    switch (type) {
      case TypesOfMovements.Entry:
        this.annotateIncome(amount);
        break;
      case TypesOfMovements.Expense:
        this.annotateExpense(amount);
        break;
      default:
        throw new Error('Type of amount not allowed');
    }
  }

  private annotateExpense(amount: number) {
    this.expense += amount;
  }

  private annotateIncome(amount: number) {
    this.income += amount;
  }

  private calculateBalance() {
    this.balance = this.income - this.expense;
  }

}
