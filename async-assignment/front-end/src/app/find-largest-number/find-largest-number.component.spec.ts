import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindLargestNumberComponent } from './find-largest-number.component';

describe('FindLargestNumberComponent', () => {
  let component: FindLargestNumberComponent;
  let fixture: ComponentFixture<FindLargestNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindLargestNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindLargestNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
