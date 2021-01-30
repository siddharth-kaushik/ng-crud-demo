import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WellDetailsComponent } from './well-details.component';

describe('WellDetailsComponent', () => {
  let component: WellDetailsComponent;
  let fixture: ComponentFixture<WellDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WellDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
