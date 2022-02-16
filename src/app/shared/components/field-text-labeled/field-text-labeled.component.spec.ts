import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldTextLabeledComponent } from './field-text-labeled.component';

describe('FieldTextLabeledComponent', () => {
  let component: FieldTextLabeledComponent;
  let fixture: ComponentFixture<FieldTextLabeledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldTextLabeledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldTextLabeledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
