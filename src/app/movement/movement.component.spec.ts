/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { MovementComponent } from './movement.component';
import {MovementService} from '../shared/movement.service';

describe('Component: MovementModel', () => {
  let service;
  beforeEach(inject([MovementService], (movementService: MovementService) => service = movementService));

  it('the movementService is truthy', () => expect(service).toBeTruthy());
  it('should create an instance', () => {
    let component = new MovementComponent(service);
    expect(component).toBeTruthy();
  });
});
