import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjetsComponent } from './create-projets.component';

describe('CreateProjetsComponent', () => {
  let component: CreateProjetsComponent;
  let fixture: ComponentFixture<CreateProjetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProjetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
