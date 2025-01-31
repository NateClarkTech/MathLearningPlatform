import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheoremsComponent } from './theorems.component';

describe('TheromsComponent', () => {
  let component: TheoremsComponent;
  let fixture: ComponentFixture<TheoremsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheoremsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheoremsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
