import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLComponent } from './menu-l.component';

describe('MenuLComponent', () => {
  let component: MenuLComponent;
  let fixture: ComponentFixture<MenuLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
