import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemorganLawComponent } from './demorgan-law.component';

describe('DemorganLawComponent', () => {
  let component: DemorganLawComponent;
  let fixture: ComponentFixture<DemorganLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemorganLawComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemorganLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
