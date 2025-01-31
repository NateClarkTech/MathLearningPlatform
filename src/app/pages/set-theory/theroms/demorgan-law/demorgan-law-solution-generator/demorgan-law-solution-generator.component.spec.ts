import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemorganLawSolutionGeneratorComponent } from './demorgan-law-solution-generator.component';

describe('DemorganLawSolutionGeneratorComponent', () => {
  let component: DemorganLawSolutionGeneratorComponent;
  let fixture: ComponentFixture<DemorganLawSolutionGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemorganLawSolutionGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemorganLawSolutionGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
