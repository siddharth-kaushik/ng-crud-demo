import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WellListItemComponent } from './well-list-item.component';

describe('WellListItemComponent', () => {
  let component: WellListItemComponent;
  let fixture: ComponentFixture<WellListItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WellListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
