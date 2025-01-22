import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTheroyNotationComponent } from './set-theroy-notation.component';

describe('SetTheroyNotationComponent', () => {
  let component: SetTheroyNotationComponent;
  let fixture: ComponentFixture<SetTheroyNotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetTheroyNotationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetTheroyNotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
