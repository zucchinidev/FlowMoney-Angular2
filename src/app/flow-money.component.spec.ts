/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { FlowMoneyComponent } from './flow-money.component';

describe('App: FlowMoney', () => {
  beforeEach(() => {
    addProviders([FlowMoneyComponent]);
  });

  it('should create the app',
    inject([FlowMoneyComponent], (app: FlowMoneyComponent) => {
      expect(app).toBeTruthy();
    }));

  it('should have as title \'app works!\'',
    inject([FlowMoneyComponent], (app: FlowMoneyComponent) => {
      expect(app.title).toEqual('app works!');
    }));
});
