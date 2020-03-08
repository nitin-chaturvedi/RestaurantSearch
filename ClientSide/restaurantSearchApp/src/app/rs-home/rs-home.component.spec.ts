import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsHomeComponent } from './rs-home.component';

describe('RsHomeComponent', () => {
  let component: RsHomeComponent;
  let fixture: ComponentFixture<RsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
