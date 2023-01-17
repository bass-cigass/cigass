import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjetsComponent } from './edit-projets.component';

describe('EditProjetsComponent', () => {
  let component: EditProjetsComponent;
  let fixture: ComponentFixture<EditProjetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProjetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
