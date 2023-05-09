import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSportComponent } from './register-sport.component';

describe('RegisterSportComponent', () => {
  let component: RegisterSportComponent;
  let fixture: ComponentFixture<RegisterSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
