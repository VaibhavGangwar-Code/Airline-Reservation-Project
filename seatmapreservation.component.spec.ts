import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatmapreservationComponent } from './seatmapreservation.component';

describe('SeatmapreservationComponent', () => {
  let component: SeatmapreservationComponent;
  let fixture: ComponentFixture<SeatmapreservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatmapreservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatmapreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
