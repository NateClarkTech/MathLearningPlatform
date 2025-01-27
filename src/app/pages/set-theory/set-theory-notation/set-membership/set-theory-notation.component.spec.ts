import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTheorySetMembershipComponent } from './set-theory-notation.component';

describe('SetTheroyNotationComponent', () => {
  let component: SetTheorySetMembershipComponent;
  let fixture: ComponentFixture<SetTheorySetMembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetTheorySetMembershipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetTheorySetMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
