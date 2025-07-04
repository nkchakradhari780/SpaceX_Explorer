import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rockets } from './rockets';

describe('Rockets', () => {
  let component: Rockets;
  let fixture: ComponentFixture<Rockets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rockets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rockets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
