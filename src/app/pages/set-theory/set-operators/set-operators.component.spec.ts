import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOperatorsComponent } from './set-operators.component';

describe('SetOperatorsComponent', () => {
  let component: SetOperatorsComponent;
  let fixture: ComponentFixture<SetOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetOperatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
