import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellListItemComponent } from './well-list-item.component';

describe('WellListItemComponent', () => {
  let component: WellListItemComponent;
  let fixture: ComponentFixture<WellListItemComponent>;

  beforeEach(async(() => {
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
