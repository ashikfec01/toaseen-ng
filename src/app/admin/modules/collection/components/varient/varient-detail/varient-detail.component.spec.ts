import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarientDetailComponent } from './varient-detail.component';

describe('VarientDetailComponent', () => {
  let component: VarientDetailComponent;
  let fixture: ComponentFixture<VarientDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarientDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarientDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
