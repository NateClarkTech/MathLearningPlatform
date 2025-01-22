import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTheroyNotationSolutionComponent } from './set-theroy-notation-solution-component.component';

describe('SetTheroyNotationSolutionComponentComponent', () => {
  let component: SetTheroyNotationSolutionComponent;
  let fixture: ComponentFixture<SetTheroyNotationSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetTheroyNotationSolutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetTheroyNotationSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
