import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarientEditComponent } from './varient-edit.component';

describe('VarientEditComponent', () => {
  let component: VarientEditComponent;
  let fixture: ComponentFixture<VarientEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarientEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarientEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
