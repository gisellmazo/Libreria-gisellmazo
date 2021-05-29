import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GisellmazoComponent } from './gisellmazo.component';

describe('GisellmazoComponent', () => {
  let component: GisellmazoComponent;
  let fixture: ComponentFixture<GisellmazoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GisellmazoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GisellmazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
