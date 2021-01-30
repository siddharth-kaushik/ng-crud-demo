import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WellStatusComponent } from './well-status.component';

describe('WellStatusComponent', () => {
  let component: WellStatusComponent;
  let fixture: ComponentFixture<WellStatusComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WellStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
