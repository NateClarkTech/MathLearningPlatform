import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTheroyNotationSubsetProblemGeneratorComponent } from './set-theory-notation-subset-problem-generator.component';

describe('SetTheroyNotationSubsetProblemGeneratorComponent', () => {
  let component: SetTheroyNotationSubsetProblemGeneratorComponent;
  let fixture: ComponentFixture<SetTheroyNotationSubsetProblemGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetTheroyNotationSubsetProblemGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetTheroyNotationSubsetProblemGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
