import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tempform } from './tempform';

describe('Tempform', () => {
  let component: Tempform;
  let fixture: ComponentFixture<Tempform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tempform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tempform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
