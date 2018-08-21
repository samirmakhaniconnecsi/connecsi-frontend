import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInfluencerComponent } from './loginInfluencer.component';

describe('LoginComponent', () => {
  let component: LoginInfluencerComponent;
  let fixture: ComponentFixture<LoginInfluencerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginInfluencerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginInfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
