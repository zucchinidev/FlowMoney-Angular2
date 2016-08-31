export class Category {
  static getIncomeCategories(): string[] {
    return [
      'Nómina',
      'Venta',
      'Interés',
      'Impuesto'
    ];
  }

  static getExpenditureCategories(): string[] {
    return [
      'Hipoteca',
      'Compra',
      'Interés',
      'Impuesto'
    ];
  }
}
