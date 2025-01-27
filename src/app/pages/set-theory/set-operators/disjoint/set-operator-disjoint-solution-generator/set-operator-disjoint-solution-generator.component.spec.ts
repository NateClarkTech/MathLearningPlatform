import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOperatorDisjointSolutionGeneratorComponent } from './set-operator-disjoint-solution-generator.component';

describe('SetOperatorDisjointSolutionGeneratorComponent', () => {
  let component: SetOperatorDisjointSolutionGeneratorComponent;
  let fixture: ComponentFixture<SetOperatorDisjointSolutionGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetOperatorDisjointSolutionGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetOperatorDisjointSolutionGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
