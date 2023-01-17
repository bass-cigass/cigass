import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProjetsComponent } from './delete-projets.component';

describe('DeleteProjetsComponent', () => {
  let component: DeleteProjetsComponent;
  let fixture: ComponentFixture<DeleteProjetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProjetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
