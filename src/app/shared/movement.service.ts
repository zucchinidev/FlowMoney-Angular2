import {Injectable} from '@angular/core';
import {TypesOfMovements, MovementModel, Category} from './';
import {IAccountingCost} from './intefaces';

@Injectable()
export class MovementService {

  static ORDER = {
    ASC: 1,
    DESC: -1
  };

  public accountingCost: IAccountingCost;
  public incomeCategories: string[];
  public expenditureCategories: string[];
  public movements: MovementModel[];
  public typeEntry: TypesOfMovements;
  public typeExpense: TypesOfMovements;

  static getEntryText(): string {
    return MovementService.getTypeText(TypesOfMovements.Entry);
  }

  static getExpenseText(): string {
    return MovementService.getTypeText(TypesOfMovements.Expense);
  }

  static getTypeText(type: number): string {
    return MovementModel.getTypeText(type);
  }

  constructor() {
    this.incomeCategories = Category.getIncomeCategories();
    this.expenditureCategories = Category.getExpenditureCategories();
    this.movements = [];
    this.typeEntry = TypesOfMovements.Entry;
    this.typeExpense = TypesOfMovements.Expense;
    this.accountingCost = {
      income: 0,
      expense: 0,
      balance: 0
    };
  }

  registerMovement(movement: MovementModel): void {
    try {
      const type = movement.type;
      const amount = movement.amount;
      this.annotateAmount(amount, type);
      this.calculateBalance();
      this.movements.push(MovementModel.createFromMovement(movement));
    } catch (e) {
      // TODO SERVICE ERROR, WRITE LOGS ERRORS BACKEND
    }
  }

  isNegativeBalance(): boolean {
    return this.accountingCost.balance < 0;
  }

  isEntry(type): boolean {
    return type === this.typeEntry;
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
    this.accountingCost.expense += amount;
  }

  private annotateIncome(amount: number) {
    this.accountingCost.income += amount;
  }

  private calculateBalance() {
    this.accountingCost.balance = this.accountingCost.income - this.accountingCost.expense;
  }

  sortMovements(field: string, order?: number) {
    order = order || MovementService.ORDER.DESC;
    this.movements.sort((a, b) => a[field] < b[field] ? order : -1 * order);
  }
}
