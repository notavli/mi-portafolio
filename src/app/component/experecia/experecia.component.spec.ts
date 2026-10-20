import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpereciaComponent } from './experecia.component';

describe('ExpereciaComponent', () => {
  let component: ExpereciaComponent;
  let fixture: ComponentFixture<ExpereciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpereciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpereciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
