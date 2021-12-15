import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddracerComponent } from './addracer.component';

describe('AddracerComponent', () => {
  let component: AddracerComponent;
  let fixture: ComponentFixture<AddracerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddracerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddracerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
