import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOperatorComplementComponent } from './set-operator-complement.component';

describe('SetOperatorComplementComponent', () => {
  let component: SetOperatorComplementComponent;
  let fixture: ComponentFixture<SetOperatorComplementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetOperatorComplementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetOperatorComplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
