import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityusherComponent } from './cityusher.component';

describe('CityusherComponent', () => {
  let component: CityusherComponent;
  let fixture: ComponentFixture<CityusherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityusherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityusherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
