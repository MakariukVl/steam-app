import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeSettersComponent } from './range-setters.component';

describe('RangeSettersComponent', () => {
  let component: RangeSettersComponent;
  let fixture: ComponentFixture<RangeSettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeSettersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeSettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
