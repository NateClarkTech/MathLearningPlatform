import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOperatorUnionSolutionGeneratorComponent } from './set-operator-union-solution-generator.component';

describe('SetOperatorUnionSolutionGeneratorComponent', () => {
  let component: SetOperatorUnionSolutionGeneratorComponent;
  let fixture: ComponentFixture<SetOperatorUnionSolutionGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetOperatorUnionSolutionGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetOperatorUnionSolutionGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
