import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUtilisateursComponent } from './delete-utilisateurs.component';

describe('DeleteUtilisateursComponent', () => {
  let component: DeleteUtilisateursComponent;
  let fixture: ComponentFixture<DeleteUtilisateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteUtilisateursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
