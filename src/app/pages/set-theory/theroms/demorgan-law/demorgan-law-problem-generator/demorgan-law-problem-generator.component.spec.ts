import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemorganLawProblemGeneratorComponent } from './demorgan-law-problem-generator.component';

describe('DemorganLawProblemGeneratorComponent', () => {
  let component: DemorganLawProblemGeneratorComponent;
  let fixture: ComponentFixture<DemorganLawProblemGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemorganLawProblemGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemorganLawProblemGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
