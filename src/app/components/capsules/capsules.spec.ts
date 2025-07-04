import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capsules } from './capsules';

describe('Capsules', () => {
  let component: Capsules;
  let fixture: ComponentFixture<Capsules>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Capsules]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Capsules);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
