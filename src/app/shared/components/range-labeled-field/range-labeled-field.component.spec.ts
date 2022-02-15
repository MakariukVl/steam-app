import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeLabeledFieldComponent } from './range-labeled-field.component';

describe('RangeLabeledFieldComponent', () => {
  let component: RangeLabeledFieldComponent;
  let fixture: ComponentFixture<RangeLabeledFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeLabeledFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeLabeledFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
