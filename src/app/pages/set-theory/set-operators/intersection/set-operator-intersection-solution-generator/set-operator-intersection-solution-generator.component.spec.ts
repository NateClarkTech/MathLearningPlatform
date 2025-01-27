import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOperatorIntersectionSolutionGeneratorComponent } from './set-operator-intersection-solution-generator.component';

describe('SetOperatorIntersectionSolutionGeneratorComponent', () => {
  let component: SetOperatorIntersectionSolutionGeneratorComponent;
  let fixture: ComponentFixture<SetOperatorIntersectionSolutionGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetOperatorIntersectionSolutionGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetOperatorIntersectionSolutionGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
