/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { MovementService } from './movement.service';

describe('Service: MovementModel', () => {
  beforeEach(() => {
    addProviders([MovementService]);
  });

  it('should ...',
    inject([MovementService],
      (service: MovementService) => {
        expect(service).toBeTruthy();
      }));
});
