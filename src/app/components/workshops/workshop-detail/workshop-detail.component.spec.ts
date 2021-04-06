import { ComponentFixture, TestBed } from '@angular/core/testing';

import { workshopDetailComponent } from './workshop-detail.component';

describe('WorkshopsDetailComponent', () => {
  let component: workshopDetailComponent;
  let fixture: ComponentFixture<workshopDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ workshopDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(workshopDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
