/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { AccountingCostComponent } from './accounting-cost.component';
import {TestComponentBuilder} from '@angular/core/testing/test_component_builder';

describe('Component: AccountingCost', () => {
  let component;
  let builder;
  beforeEach(() => {
    addProviders([TestComponentBuilder]);

  });

  beforeEach(inject([TestComponentBuilder], (testComponentBuilder) => {
    builder = testComponentBuilder;
  }));

  it('should create an instance', (done) => {
    builder.createAsync(AccountingCostComponent)
      .then(fixture => {
        component = fixture.componentInstance;
        component.accountingCost = {};
        expect(component).toBeTruthy();
        expect(component.accountingCost).toBeTruthy();
        done();
      })
      .catch((e) => done.fail(e));
  });
});
