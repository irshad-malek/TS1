import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetstudentComponent } from './getstudent.component';

describe('GetstudentComponent', () => {
  let component: GetstudentComponent;
  let fixture: ComponentFixture<GetstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
