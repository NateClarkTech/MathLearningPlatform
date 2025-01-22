import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTheroyNotationSubsetSolutionComponentComponent } from './set-theroy-notation-subset-solution-component.component';

describe('SetTheroyNotationSubsetSolutionComponentComponent', () => {
  let component: SetTheroyNotationSubsetSolutionComponentComponent;
  let fixture: ComponentFixture<SetTheroyNotationSubsetSolutionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetTheroyNotationSubsetSolutionComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetTheroyNotationSubsetSolutionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
