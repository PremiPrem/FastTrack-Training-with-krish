import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindWordOccuranceComponent } from './find-word-occurance.component';

describe('FindWordOccuranceComponent', () => {
  let component: FindWordOccuranceComponent;
  let fixture: ComponentFixture<FindWordOccuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindWordOccuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindWordOccuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
