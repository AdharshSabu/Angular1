import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltrabookComponent } from './ultrabook.component';

describe('UltrabookComponent', () => {
  let component: UltrabookComponent;
  let fixture: ComponentFixture<UltrabookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltrabookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltrabookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
