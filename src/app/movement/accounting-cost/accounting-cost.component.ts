import {Component, OnInit, Input} from '@angular/core';
import {IAccountingCost} from '../../shared/intefaces';

@Component({
  moduleId: module.id,
  selector: 'app-accounting-cost',
  templateUrl: 'accounting-cost.component.html',
  styleUrls: ['accounting-cost.component.css']
})
export class AccountingCostComponent implements OnInit {

  @Input() accountingCost: IAccountingCost;
  constructor() { }

  ngOnInit() {
  }


  isNegativeBalance(): boolean {
    return this.accountingCost.balance < 0;
  }

}
