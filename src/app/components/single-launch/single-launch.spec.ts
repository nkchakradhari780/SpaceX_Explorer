import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLaunch } from './single-launch';

describe('SingleLaunch', () => {
  let component: SingleLaunch;
  let fixture: ComponentFixture<SingleLaunch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleLaunch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleLaunch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
