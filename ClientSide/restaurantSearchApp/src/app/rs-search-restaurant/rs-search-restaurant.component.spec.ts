import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsSearchRestaurantComponent } from './rs-search-restaurant.component';

describe('RsSearchRestaurantComponent', () => {
  let component: RsSearchRestaurantComponent;
  let fixture: ComponentFixture<RsSearchRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsSearchRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsSearchRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
