import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTheoryNotiationProblemGeneratorComponent } from './set-theory-notiation-problem-generator.component';

describe('SetTheoryNotiationProblemGeneratorComponent', () => {
  let component: SetTheoryNotiationProblemGeneratorComponent;
  let fixture: ComponentFixture<SetTheoryNotiationProblemGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetTheoryNotiationProblemGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetTheoryNotiationProblemGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
