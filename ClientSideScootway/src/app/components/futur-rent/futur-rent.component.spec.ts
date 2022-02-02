import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturRentComponent } from './futur-rent.component';

describe('FuturRentComponent', () => {
  let component: FuturRentComponent;
  let fixture: ComponentFixture<FuturRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuturRentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuturRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
