import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTab } from './second-tab';

describe('SecondTab', () => {
  let component: SecondTab;
  let fixture: ComponentFixture<SecondTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondTab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
