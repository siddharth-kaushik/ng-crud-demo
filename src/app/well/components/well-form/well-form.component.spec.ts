import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellFormComponent } from './well-form.component';

describe('WellFormComponent', () => {
  let component: WellFormComponent;
  let fixture: ComponentFixture<WellFormComponent>;

  beforeEach(async(() => {
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
