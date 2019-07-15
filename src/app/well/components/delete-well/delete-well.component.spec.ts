import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWellComponent } from './delete-well.component';

describe('DeleteWellComponent', () => {
  let component: DeleteWellComponent;
  let fixture: ComponentFixture<DeleteWellComponent>;

  beforeEach(async(() => {
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
