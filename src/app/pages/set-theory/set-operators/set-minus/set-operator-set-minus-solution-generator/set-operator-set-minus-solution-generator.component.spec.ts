import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOperatorSetMinusSolutionGeneratorComponent } from './set-operator-set-minus-solution-generator.component';

describe('SetOperatorSetMinusSolutionGeneratorComponent', () => {
  let component: SetOperatorSetMinusSolutionGeneratorComponent;
  let fixture: ComponentFixture<SetOperatorSetMinusSolutionGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetOperatorSetMinusSolutionGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetOperatorSetMinusSolutionGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
