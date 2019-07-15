import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellDetailsComponent } from './well-details.component';

describe('WellDetailsComponent', () => {
  let component: WellDetailsComponent;
  let fixture: ComponentFixture<WellDetailsComponent>;

  beforeEach(async(() => {
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
