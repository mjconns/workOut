import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartWorkOutComponent } from './start-work-out.component';

describe('StartWorkOutComponent', () => {
  let component: StartWorkOutComponent;
  let fixture: ComponentFixture<StartWorkOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartWorkOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartWorkOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
