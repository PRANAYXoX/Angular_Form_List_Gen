import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromModuleComponent } from './from-module.component';

describe('FromModuleComponent', () => {
  let component: FromModuleComponent;
  let fixture: ComponentFixture<FromModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
