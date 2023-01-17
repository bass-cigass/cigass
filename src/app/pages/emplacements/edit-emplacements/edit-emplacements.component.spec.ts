import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmplacementsComponent } from './edit-emplacements.component';

describe('EditEmplacementsComponent', () => {
  let component: EditEmplacementsComponent;
  let fixture: ComponentFixture<EditEmplacementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmplacementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEmplacementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
