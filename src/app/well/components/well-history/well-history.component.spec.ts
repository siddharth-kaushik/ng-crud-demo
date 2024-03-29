import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WellHistoryComponent } from './well-history.component';

describe('WellHistoryComponent', () => {
  let component: WellHistoryComponent;
  let fixture: ComponentFixture<WellHistoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WellHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
