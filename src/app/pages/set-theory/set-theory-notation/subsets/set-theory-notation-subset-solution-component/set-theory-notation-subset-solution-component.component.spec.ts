import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTheoryNotationSubsetSolutionComponent} from './set-theroy-notation-subset-solution-component.component';

describe('SetTheroyNotationSubsetSolutionComponentComponent', () => {
  let component: SetTheoryNotationSubsetSolutionComponent;
  let fixture: ComponentFixture<SetTheoryNotationSubsetSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetTheoryNotationSubsetSolutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetTheoryNotationSubsetSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
