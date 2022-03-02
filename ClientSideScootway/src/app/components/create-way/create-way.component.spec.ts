import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWayComponent } from './create-way.component';

describe('CreateWayComponent', () => {
  let component: CreateWayComponent;
  let fixture: ComponentFixture<CreateWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
