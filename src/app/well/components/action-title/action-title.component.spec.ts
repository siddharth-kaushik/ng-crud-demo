import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionTitleComponent } from './action-title.component';

describe('ActionTitleComponent', () => {
  let component: ActionTitleComponent;
  let fixture: ComponentFixture<ActionTitleComponent>;

  beforeEach(async(() => {
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
