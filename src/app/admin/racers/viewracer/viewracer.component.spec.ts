import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewracerComponent } from './viewracer.component';

describe('ViewracerComponent', () => {
  let component: ViewracerComponent;
  let fixture: ComponentFixture<ViewracerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewracerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewracerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
