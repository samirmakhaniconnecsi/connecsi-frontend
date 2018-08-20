import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassfieldsComponent } from './classfields.component';

describe('ClassfieldsComponent', () => {
  let component: ClassfieldsComponent;
  let fixture: ComponentFixture<ClassfieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassfieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassfieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
