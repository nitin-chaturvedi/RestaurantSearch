import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsLoginComponent } from './rs-login.component';

describe('RsLoginComponent', () => {
  let component: RsLoginComponent;
  let fixture: ComponentFixture<RsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
