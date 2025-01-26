import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTheoryNotationComponent } from './set-theory-notation.component';

describe('SetTheoryComponent', () => {
  let component: SetTheoryNotationComponent;
  let fixture: ComponentFixture<SetTheoryNotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetTheoryNotationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetTheoryNotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
