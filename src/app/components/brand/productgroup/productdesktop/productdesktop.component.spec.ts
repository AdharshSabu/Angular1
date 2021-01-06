import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdesktopComponent } from './productdesktop.component';

describe('ProductdesktopComponent', () => {
  let component: ProductdesktopComponent;
  let fixture: ComponentFixture<ProductdesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
