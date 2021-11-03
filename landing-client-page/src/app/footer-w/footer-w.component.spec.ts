import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterWComponent } from './footer-w.component';

describe('FooterWComponent', () => {
  let component: FooterWComponent;
  let fixture: ComponentFixture<FooterWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterWComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
