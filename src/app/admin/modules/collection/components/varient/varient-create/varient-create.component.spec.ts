import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarientCreateComponent } from './varient-create.component';

describe('VarientCreateComponent', () => {
  let component: VarientCreateComponent;
  let fixture: ComponentFixture<VarientCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarientCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarientCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
