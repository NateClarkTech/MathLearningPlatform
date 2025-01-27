import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTheoryNotationSolutionComponent } from './set-theory-notation-solution-component.component';

describe('SetTheoryNotationSolutionComponentComponent', () => {
  let component: SetTheoryNotationSolutionComponent;
  let fixture: ComponentFixture<SetTheoryNotationSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetTheoryNotationSolutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetTheoryNotationSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
