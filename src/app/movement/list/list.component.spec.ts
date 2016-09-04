/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ListComponent } from './list.component';
import {MovementService} from '../../shared/movement.service';
import {TypesOfMovements} from '../../shared/enums/typesOfMovements';

describe('Component: List', () => {
  let service;
  let component;
  beforeEach(() => {
    addProviders([MovementService]);
  });

  it('should create an instance', inject([MovementService], (movementService: MovementService) => {
    service = movementService;
    component = new ListComponent(service);
    component.ngOnInit();
    expect(component).toBeTruthy();
  }));


  it('initial order ASC', () => {
    const order = MovementService.ORDER.ASC;
    expect(component.order).toBe(order);
  });
});
