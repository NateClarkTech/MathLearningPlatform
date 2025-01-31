import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOperatorSetMinusProblemPageComponent } from './set-operator-set-minus';

describe('SetOperatorSetMinusProblemPageComponent', () => {
  let component: SetOperatorSetMinusProblemPageComponent;
  let fixture: ComponentFixture<SetOperatorSetMinusProblemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetOperatorSetMinusProblemPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetOperatorSetMinusProblemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
