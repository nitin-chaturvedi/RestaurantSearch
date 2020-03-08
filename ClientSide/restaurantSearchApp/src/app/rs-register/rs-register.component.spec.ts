import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsRegisterComponent } from './rs-register.component';

describe('RsRegisterComponent', () => {
  let component: RsRegisterComponent;
  let fixture: ComponentFixture<RsRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
