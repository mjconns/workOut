import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOutProgramsComponent } from './work-out-programs.component';

describe('WorkOutProgramsComponent', () => {
  let component: WorkOutProgramsComponent;
  let fixture: ComponentFixture<WorkOutProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkOutProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOutProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
