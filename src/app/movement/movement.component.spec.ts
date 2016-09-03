/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { MovementComponent } from './movement.component';
import {MovementService} from '../shared/movement.service';
import {MovementModel} from '../shared/model/MovementModel';
import {TypesOfMovements} from '../shared/enums/typesOfMovements';

describe('Component: MovementModel', () => {
  let service;
  let model;
  let component;

  beforeEach(() => {
    addProviders([MovementService]);
    model = MovementModel.create();
    inject([MovementService], (movementService: MovementService) => {
      service = movementService;
    });
  });

  it('the movementService is truthy', () => inject([MovementService], (movementService: MovementService) => {
    service = movementService;
    expect(service).toBeTruthy();
  }));

  it('the movement is truthy', () => expect(model).toBeTruthy());
  it('should create an instance', () => {
    component = new MovementComponent(service, model);
    expect(component).toBeTruthy();
  });

  it('Type of movement is ok', () => {
    expect(component.getEntryValue() === TypesOfMovements.Expense);
    expect(component.getExpenseValue() === TypesOfMovements.Expense);
  });
});
