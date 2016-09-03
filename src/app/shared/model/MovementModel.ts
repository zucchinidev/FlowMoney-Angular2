import {TypesOfMovements} from '../enums/typesOfMovements';
import {IMovement} from './interfaces';

export class MovementModel implements IMovement {

  public id: string;
  public type: TypesOfMovements;
  public category: string;
  public date: Date;
  public amount: number;


  static getTypeText(type: number): string {
    let txt = '';
    switch (type) {
      case TypesOfMovements.Entry:
        txt = 'Ingreso'; // TODO: i18n
        break;
      default:
        txt = 'Gasto';
        break;
    }
    return txt;
  }

  static createFromMovement(movement: MovementModel): MovementModel {
    return new MovementModel({
      type: movement.type,
      id: movement.id,
      category: movement.category,
      date: movement.date,
      amount: movement.amount
    });
  }

  static create(): MovementModel {
    return new MovementModel();
  }

  constructor({
    id = new Date().toDateString(),
    type = TypesOfMovements.Entry,
    category = 'Nómina',
    date = new Date(),
    amount = 0
  }: {
    id?: string;
    type?: TypesOfMovements;
    category?: string;
    date?: Date;
    amount?: number
  } = {}) {
    this.id = id;
    this.type = type;
    this.category = category;
    this.date = date;
    this.amount = amount;
  }

  isIncome(): boolean {
    return this.type === TypesOfMovements.Entry;
  }
}
