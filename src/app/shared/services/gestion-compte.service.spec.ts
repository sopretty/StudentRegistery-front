import { TestBed, inject } from '@angular/core/testing';

import { GestionCompteService } from './gestion-compte.service';

describe('GestionCompteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GestionCompteService]
    });
  });

  it('should ...', inject([GestionCompteService], (service: GestionCompteService) => {
    expect(service).toBeTruthy();
  }));
});
