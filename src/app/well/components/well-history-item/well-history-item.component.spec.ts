import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellHistoryItemComponent } from './well-history-item.component';

describe('WellHistoryItemComponent', () => {
  let component: WellHistoryItemComponent;
  let fixture: ComponentFixture<WellHistoryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellHistoryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellHistoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
