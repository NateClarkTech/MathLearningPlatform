import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOperatorIntersectionProblemGeneratorComponent } from './set-operator-intersection-problem-generator.component';

describe('SetOperatorIntersectionProblemGeneratorComponent', () => {
  let component: SetOperatorIntersectionProblemGeneratorComponent;
  let fixture: ComponentFixture<SetOperatorIntersectionProblemGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetOperatorIntersectionProblemGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetOperatorIntersectionProblemGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
