import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rec } from './rec';

describe('Rec', () => {
  let component: Rec;
  let fixture: ComponentFixture<Rec>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rec]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rec);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
