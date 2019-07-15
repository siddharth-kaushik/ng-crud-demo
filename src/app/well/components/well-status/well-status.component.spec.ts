import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellStatusComponent } from './well-status.component';

describe('WellStatusComponent', () => {
  let component: WellStatusComponent;
  let fixture: ComponentFixture<WellStatusComponent>;

  beforeEach(async(() => {
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
