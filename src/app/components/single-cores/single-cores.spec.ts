import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCores } from './single-cores';

describe('SingleCores', () => {
  let component: SingleCores;
  let fixture: ComponentFixture<SingleCores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleCores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleCores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
