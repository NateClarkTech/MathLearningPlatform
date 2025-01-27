import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOperatorComplementSolutionGeneratorComponent } from './set-operator-complement-solution-generator.component';

describe('SetOperatorComplementSolutionGeneratorComponent', () => {
  let component: SetOperatorComplementSolutionGeneratorComponent;
  let fixture: ComponentFixture<SetOperatorComplementSolutionGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetOperatorComplementSolutionGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetOperatorComplementSolutionGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
