/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { EditorComponent } from './editor.component';
import {MovementService} from '../../shared/movement.service';

describe('Component: Editor', () => {
  let service;
  beforeEach(() => {
    addProviders([MovementService]);
    inject([MovementService], (movementService: MovementService) => {
      service = movementService;
    });
  });
  it('should create an instance', () => {
    let component = new EditorComponent(service);
    expect(component).toBeTruthy();
  });
});
