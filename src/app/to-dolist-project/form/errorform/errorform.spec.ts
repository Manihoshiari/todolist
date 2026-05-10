import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Errorform } from './errorform';

describe('Errorform', () => {
  let component: Errorform;
  let fixture: ComponentFixture<Errorform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Errorform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Errorform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
