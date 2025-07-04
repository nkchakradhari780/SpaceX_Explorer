import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cores } from './cores';

describe('Cores', () => {
  let component: Cores;
  let fixture: ComponentFixture<Cores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
