import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WellFormComponent } from './well-form.component';

describe('WellFormComponent', () => {
  let component: WellFormComponent;
  let fixture: ComponentFixture<WellFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WellFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
