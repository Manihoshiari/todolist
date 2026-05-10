import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlimTask } from './flim-task';

describe('FlimTask', () => {
  let component: FlimTask;
  let fixture: ComponentFixture<FlimTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlimTask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlimTask);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
