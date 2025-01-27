import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOperatorUnionProblemGeneratorComponent } from './set-operator-union-problem-generator.component';

describe('SetOperatorUnionProblemGeneratorComponent', () => {
  let component: SetOperatorUnionProblemGeneratorComponent;
  let fixture: ComponentFixture<SetOperatorUnionProblemGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetOperatorUnionProblemGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetOperatorUnionProblemGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
