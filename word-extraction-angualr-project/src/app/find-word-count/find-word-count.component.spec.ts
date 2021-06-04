import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindWordCountComponent } from './find-word-count.component';

describe('FindWordCountComponent', () => {
  let component: FindWordCountComponent;
  let fixture: ComponentFixture<FindWordCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindWordCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindWordCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
