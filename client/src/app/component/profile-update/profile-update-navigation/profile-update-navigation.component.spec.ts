import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUpdateNavigationComponent } from './profile-update-navigation.component';

describe('ProfileUpdateNavigationComponent', () => {
  let component: ProfileUpdateNavigationComponent;
  let fixture: ComponentFixture<ProfileUpdateNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileUpdateNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUpdateNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
