import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetMinusProblemGeneratorComponent } from './set-operator-set-minus-problem-generator.component';

describe('SetOperatorSetMinusProblemGeneratorComponent', () => {
  let component: SetMinusProblemGeneratorComponent;
  let fixture: ComponentFixture<SetMinusProblemGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetMinusProblemGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetMinusProblemGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
