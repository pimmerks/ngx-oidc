import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOidcComponent } from './ngx-oidc.component';

describe('NgxOidcComponent', () => {
  let component: NgxOidcComponent;
  let fixture: ComponentFixture<NgxOidcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxOidcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxOidcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
