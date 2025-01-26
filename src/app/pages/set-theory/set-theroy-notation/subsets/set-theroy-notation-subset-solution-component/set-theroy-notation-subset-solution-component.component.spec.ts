import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTheroyNotationSubsetSolutionComponent} from './set-theroy-notation-subset-solution-component.component';

describe('SetTheroyNotationSubsetSolutionComponentComponent', () => {
  let component: SetTheroyNotationSubsetSolutionComponent;
  let fixture: ComponentFixture<SetTheroyNotationSubsetSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetTheroyNotationSubsetSolutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetTheroyNotationSubsetSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
