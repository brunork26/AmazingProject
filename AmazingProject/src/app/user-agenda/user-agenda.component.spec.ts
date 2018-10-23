import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAgendaComponent } from './user-agenda.component';

describe('UserAgendaComponent', () => {
  let component: UserAgendaComponent;
  let fixture: ComponentFixture<UserAgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAgendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
