import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCapsule } from './single-capsule';

describe('SingleCapsule', () => {
  let component: SingleCapsule;
  let fixture: ComponentFixture<SingleCapsule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleCapsule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleCapsule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
