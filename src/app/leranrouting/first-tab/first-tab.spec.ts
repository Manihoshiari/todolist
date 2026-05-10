import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTab } from './first-tab';

describe('FirstTab', () => {
  let component: FirstTab;
  let fixture: ComponentFixture<FirstTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstTab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
