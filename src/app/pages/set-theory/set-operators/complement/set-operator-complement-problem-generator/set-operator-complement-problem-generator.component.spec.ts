import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOperatorComplementProblemGeneratorComponent } from './set-operator-complement-problem-generator.component';

describe('SetOperatorComplementProblemGeneratorComponent', () => {
  let component: SetOperatorComplementProblemGeneratorComponent;
  let fixture: ComponentFixture<SetOperatorComplementProblemGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetOperatorComplementProblemGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetOperatorComplementProblemGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
