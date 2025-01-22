import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTheroyNotiationProblemGeneratorComponent } from './set-theroy-notiation-problem-generator.component';

describe('SetTheroyNotiationProblemGeneratorComponent', () => {
  let component: SetTheroyNotiationProblemGeneratorComponent;
  let fixture: ComponentFixture<SetTheroyNotiationProblemGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetTheroyNotiationProblemGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetTheroyNotiationProblemGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
