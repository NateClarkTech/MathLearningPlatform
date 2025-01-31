import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOperatorSetMinusComponent } from './set-operator-set-minus';

describe('SetOperatorSetMinusProblemPageComponent', () => {
  let component: SetOperatorSetMinusComponent;
  let fixture: ComponentFixture<SetOperatorSetMinusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetOperatorSetMinusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetOperatorSetMinusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
