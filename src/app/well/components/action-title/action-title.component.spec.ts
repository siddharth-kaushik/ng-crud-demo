import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ActionTitleComponent } from './action-title.component';

describe('ActionTitleComponent', () => {
  let component: ActionTitleComponent;
  let fixture: ComponentFixture<ActionTitleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
