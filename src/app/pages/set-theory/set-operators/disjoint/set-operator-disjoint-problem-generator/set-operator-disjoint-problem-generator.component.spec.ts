import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOperatorDisjointProblemGeneratorComponent } from './set-operator-disjoint-problem-generator.component';

describe('SetOperatorDisjointProblemGeneratorComponent', () => {
  let component: SetOperatorDisjointProblemGeneratorComponent;
  let fixture: ComponentFixture<SetOperatorDisjointProblemGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetOperatorDisjointProblemGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetOperatorDisjointProblemGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
