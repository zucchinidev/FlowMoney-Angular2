import { Component, OnInit } from '@angular/core';

import Category from './model/Category';
import {Movement} from './model/Movement';


@Component({
  moduleId: module.id,
  selector: 'app-movement',
  templateUrl: 'movement.component.html',
  styleUrls: ['movement.component.css']
})
export class MovementComponent implements OnInit {
  public movement: Movement;
  public incomeCategories: string[];
  public expenditureCategories: string[];
  public movements: Movement[];
  public order: number;
  public income: number;
  public expense: number;

  constructor({
    incomeCategories = Category.getIncomeCategories(),
    expenditureCategories = Category.getExpenditureCategories(),
  }: {
    incomeCategories?: string[],
    expenditureCategories?: string[]
  } = {}) {
    this.incomeCategories = incomeCategories;
    this.expenditureCategories = expenditureCategories;
  }

  ngOnInit() {
    this.movement = new Movement();
  }

  save() {
    if (this.isIncome()) {
      this.income += this.movement.getAmount();
    }
  }


  private isIncome() {
    return this.movement.isIncome();
  }
}
