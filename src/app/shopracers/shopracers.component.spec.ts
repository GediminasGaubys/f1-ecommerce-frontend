import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopracersComponent } from './shopracers.component';

describe('ShopracersComponent', () => {
  let component: ShopracersComponent;
  let fixture: ComponentFixture<ShopracersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopracersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopracersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
