import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTournamentComponent } from './register-tournament.component';

describe('RegisterTournamentComponent', () => {
  let component: RegisterTournamentComponent;
  let fixture: ComponentFixture<RegisterTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterTournamentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
