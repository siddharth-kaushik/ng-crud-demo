import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeleteWellComponent } from './delete-well.component';

describe('DeleteWellComponent', () => {
  let component: DeleteWellComponent;
  let fixture: ComponentFixture<DeleteWellComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteWellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteWellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
