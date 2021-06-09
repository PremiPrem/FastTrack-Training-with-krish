import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAnagramComponent } from './find-anagram.component';

describe('FindAnagramComponent', () => {
  let component: FindAnagramComponent;
  let fixture: ComponentFixture<FindAnagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAnagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAnagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
