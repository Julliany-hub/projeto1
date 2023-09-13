import { TestBed } from '@angular/core/testing';
import { CardapioserviceService } from './cardapioservice.service';


describe('CardapioserviceService', () => {
  let service: CardapioserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardapioserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
