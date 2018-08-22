import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationSuccessfullyComponent } from './registrationSuccessfully.component';

describe('RegistrationSuccessfullyComponent', () => {
  let component: RegistrationSuccessfullyComponent;
  let fixture: ComponentFixture<RegistrationSuccessfullyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationSuccessfullyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationSuccessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
