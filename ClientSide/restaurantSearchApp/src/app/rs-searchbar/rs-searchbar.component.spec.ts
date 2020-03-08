import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsSearchbarComponent } from './rs-searchbar.component';

describe('RsSearchbarComponent', () => {
  let component: RsSearchbarComponent;
  let fixture: ComponentFixture<RsSearchbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsSearchbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
