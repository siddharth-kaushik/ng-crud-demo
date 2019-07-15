import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellTextComponent } from './well-text.component';

describe('WellTextComponent', () => {
  let component: WellTextComponent;
  let fixture: ComponentFixture<WellTextComponent>;

  beforeEach(async(() => {
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
