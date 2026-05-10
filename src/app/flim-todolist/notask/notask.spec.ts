import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notask } from './notask';

describe('Notask', () => {
  let component: Notask;
  let fixture: ComponentFixture<Notask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notask);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
