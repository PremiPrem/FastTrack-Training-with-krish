import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibanocciComponent } from './fibanocci.component';

describe('FibanocciComponent', () => {
  let component: FibanocciComponent;
  let fixture: ComponentFixture<FibanocciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FibanocciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FibanocciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
