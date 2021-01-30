import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WellTimestampComponent } from './well-timestamp.component';

describe('WellTimestampComponent', () => {
  let component: WellTimestampComponent;
  let fixture: ComponentFixture<WellTimestampComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WellTimestampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellTimestampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
