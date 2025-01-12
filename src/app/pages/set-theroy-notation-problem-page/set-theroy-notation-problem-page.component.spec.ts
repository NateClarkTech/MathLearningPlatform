import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTheroyNotationProblemPageComponent } from './set-theroy-notation-problem-page.component';

describe('SetTheroyNotationProblemPageComponent', () => {
  let component: SetTheroyNotationProblemPageComponent;
  let fixture: ComponentFixture<SetTheroyNotationProblemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetTheroyNotationProblemPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetTheroyNotationProblemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
