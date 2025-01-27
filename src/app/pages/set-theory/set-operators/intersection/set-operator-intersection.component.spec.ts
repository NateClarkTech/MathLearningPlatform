import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOperatorIntersectionComponent } from './set-operator-intersection.component';

describe('SetOperatorIntersectionComponent', () => {
  let component: SetOperatorIntersectionComponent;
  let fixture: ComponentFixture<SetOperatorIntersectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetOperatorIntersectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetOperatorIntersectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
