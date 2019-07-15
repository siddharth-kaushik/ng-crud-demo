import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellTimestampComponent } from './well-timestamp.component';

describe('WellTimestampComponent', () => {
  let component: WellTimestampComponent;
  let fixture: ComponentFixture<WellTimestampComponent>;

  beforeEach(async(() => {
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
