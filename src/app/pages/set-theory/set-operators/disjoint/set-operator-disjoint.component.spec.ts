import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOperatorDisjointComponent } from './set-operator-disjoint.component';

describe('SetOperatorDisjointComponent', () => {
  let component: SetOperatorDisjointComponent;
  let fixture: ComponentFixture<SetOperatorDisjointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetOperatorDisjointComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetOperatorDisjointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
