import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewScootComponent } from './new-scoot.component';

describe('NewScootComponent', () => {
  let component: NewScootComponent;
  let fixture: ComponentFixture<NewScootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewScootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewScootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
