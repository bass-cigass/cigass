import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMagasinsComponent } from './edit-magasins.component';

describe('EditMagasinsComponent', () => {
  let component: EditMagasinsComponent;
  let fixture: ComponentFixture<EditMagasinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMagasinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMagasinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
