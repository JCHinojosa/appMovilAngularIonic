import { TestBed } from '@angular/core/testing';

import { BaseDatosService } from './basedatos.service';

describe('BasedatosService', () => {
  let service: BaseDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
