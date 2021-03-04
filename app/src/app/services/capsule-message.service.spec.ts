import { TestBed } from '@angular/core/testing';

import { CapsuleMessageService } from './capsule-message.service';

describe('CapsuleMessageService', () => {
  let service: CapsuleMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapsuleMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
