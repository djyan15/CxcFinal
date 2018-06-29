import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApicxcComponent } from './apicxc.component';

describe('ApicxcComponent', () => {
  let component: ApicxcComponent;
  let fixture: ComponentFixture<ApicxcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApicxcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApicxcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
