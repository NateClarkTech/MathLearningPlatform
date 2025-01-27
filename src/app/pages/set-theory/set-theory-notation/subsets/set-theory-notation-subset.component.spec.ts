import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTheroyNotationSubsetComponent } from './set-theory-notation-subset.component';

describe('SetTheroyNotationSubsetComponent', () => {
  let component: SetTheroyNotationSubsetComponent;
  let fixture: ComponentFixture<SetTheroyNotationSubsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetTheroyNotationSubsetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetTheroyNotationSubsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
