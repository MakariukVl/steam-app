import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockFilterComponent } from './block-filter.component';

describe('BlockFilterComponent', () => {
  let component: BlockFilterComponent;
  let fixture: ComponentFixture<BlockFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
