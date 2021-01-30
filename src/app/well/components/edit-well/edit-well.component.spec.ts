import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditWellComponent } from './edit-well.component';

describe('EditWellComponent', () => {
  let component: EditWellComponent;
  let fixture: ComponentFixture<EditWellComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
