import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTSComponent } from './home-ts.component';

describe('HomeTSComponent', () => {
  let component: HomeTSComponent;
  let fixture: ComponentFixture<HomeTSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
