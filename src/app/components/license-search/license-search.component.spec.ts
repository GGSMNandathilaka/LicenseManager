import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseSearchComponent } from './license-search.component';

describe('LicenseSearchComponent', () => {
  let component: LicenseSearchComponent;
  let fixture: ComponentFixture<LicenseSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenseSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
