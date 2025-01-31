import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOperatorSetMinusProblemGeneratorComponent } from './set-operator-set-minus-problem-generator.component';

describe('SetOperatorSetMinusProblemGeneratorComponent', () => {
  let component: SetOperatorSetMinusProblemGeneratorComponent;
  let fixture: ComponentFixture<SetOperatorSetMinusProblemGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetOperatorSetMinusProblemGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetOperatorSetMinusProblemGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
