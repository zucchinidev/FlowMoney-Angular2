import {TypesOfMovements} from '../enums/typesOfMovements';

interface IMovement {
  id: string;
  type: TypesOfMovements;
  category: string;
  date: Date;
  amount: number;
}

export class Movement implements IMovement {
  private _id: string;
  private _type: TypesOfMovements;
  private _category: string;
  private _date: Date;
  private _amount: number;


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
    this._id = id;
    this._type = type;
    this._category = category;
    this._date = date;
    this._amount = amount;
  }

  get id(): string {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
  }

  get type(): TypesOfMovements {
    return this._type;
  }

  set type(type: TypesOfMovements) {
    this._type = type;
  }

  get category(): string {
    return this._category;
  }

  set category(category: string) {
    this._category = category;
  }

  get date(): Date {
    return this._date;
  }

  set date(date: Date) {
    this._date = date;
  }

  get amount(): number {
    return this._amount;
  }

  set amount(amount: number) {
    this._amount = amount;
  }

  isIncome(): boolean {
    return this.type === TypesOfMovements.Entry;
  }

}
