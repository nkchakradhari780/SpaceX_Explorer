import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRocket } from './single-rocket';

describe('SingleRocket', () => {
  let component: SingleRocket;
  let fixture: ComponentFixture<SingleRocket>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleRocket]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleRocket);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
