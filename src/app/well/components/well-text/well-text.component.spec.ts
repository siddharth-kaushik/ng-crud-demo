import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WellTextComponent } from './well-text.component';

describe('WellTextComponent', () => {
  let component: WellTextComponent;
  let fixture: ComponentFixture<WellTextComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WellTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
