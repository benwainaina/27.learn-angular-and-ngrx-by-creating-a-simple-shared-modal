import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedHelpComponent } from './shared-help.component';

describe('SharedHelpComponent', () => {
  let component: SharedHelpComponent;
  let fixture: ComponentFixture<SharedHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedHelpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
