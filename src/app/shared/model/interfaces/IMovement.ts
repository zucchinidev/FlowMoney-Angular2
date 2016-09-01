import {TypesOfMovements} from '../../enums';

export interface IMovement {
  id: string;
  type: TypesOfMovements;
  category: string;
  date: Date;
  amount: number;
  isIncome(): boolean;
}
