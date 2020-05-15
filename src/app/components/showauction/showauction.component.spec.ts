import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowauctionComponent } from './showauction.component';

describe('ShowauctionComponent', () => {
  let component: ShowauctionComponent;
  let fixture: ComponentFixture<ShowauctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowauctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowauctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
