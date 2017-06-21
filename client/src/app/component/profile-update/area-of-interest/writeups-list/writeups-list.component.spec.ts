import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteupsListComponent } from './writeups-list.component';

describe('WriteupsListComponent', () => {
  let component: WriteupsListComponent;
  let fixture: ComponentFixture<WriteupsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteupsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteupsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
