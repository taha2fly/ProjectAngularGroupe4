import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchMessagesComponent } from './launch-messages.component';

describe('LaunchMessagesComponent', () => {
  let component: LaunchMessagesComponent;
  let fixture: ComponentFixture<LaunchMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
