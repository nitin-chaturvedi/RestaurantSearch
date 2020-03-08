import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsAddRestaurantComponent } from './rs-add-restaurant.component';

describe('RsAddRestaurantComponent', () => {
  let component: RsAddRestaurantComponent;
  let fixture: ComponentFixture<RsAddRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsAddRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsAddRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
