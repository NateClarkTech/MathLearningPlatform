import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOperatorUnionComponent } from './set-operator-union.component';

describe('SetOperatorUnionComponent', () => {
  let component: SetOperatorUnionComponent;
  let fixture: ComponentFixture<SetOperatorUnionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetOperatorUnionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetOperatorUnionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
