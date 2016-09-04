import {Component, OnInit, Input} from '@angular/core';
import {MovementModel} from '../../shared/model/MovementModel';
import {MovementService} from '../../shared/movement.service';
import {TypesOfMovements} from '../../shared/enums/typesOfMovements';


@Component({
  moduleId: module.id,
  selector: 'app-editor',
  templateUrl: 'editor.component.html',
  styleUrls: ['editor.component.css']
})
export class EditorComponent implements OnInit {
  public incomeCategories: string[];
  public expenditureCategories: string[];
  public typeEntry: TypesOfMovements;
  public typeExpense: TypesOfMovements;

  @Input() movement: MovementModel;

  constructor(private movementService: MovementService) { }

  ngOnInit() {
    this.incomeCategories = this.movementService.incomeCategories;
    this.expenditureCategories = this.movementService.expenditureCategories;
    this.typeEntry = this.movementService.typeEntry;
    this.typeExpense = this.movementService.typeExpense;
  }


  save(): void {
    this.movementService.registerMovement(this.movement);
    this.movement = MovementModel.create();
  }

  getEntryText(): string {
    return MovementService.getEntryText();
  }

  getExpenseText(): string {
    return MovementService.getExpenseText();
  }

  onChangeType(event): void {
    this.movement.type = parseInt(event.currentTarget.value, 10);
  }

}
