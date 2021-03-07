import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsuleMessagesComponent } from './capsule-messages.component';

describe('CapsuleMessagesComponent', () => {
  let component: CapsuleMessagesComponent;
  let fixture: ComponentFixture<CapsuleMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapsuleMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsuleMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
