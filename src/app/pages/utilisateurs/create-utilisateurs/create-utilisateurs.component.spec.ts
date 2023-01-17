import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUtilisateursComponent } from './create-utilisateurs.component';

describe('CreateUtilisateursComponent', () => {
  let component: CreateUtilisateursComponent;
  let fixture: ComponentFixture<CreateUtilisateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUtilisateursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
