import { TestBed } from '@angular/core/testing';

import { LaunchMessageService } from './launch-message.service';

describe('LaunchMessageService', () => {
  let service: LaunchMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaunchMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
