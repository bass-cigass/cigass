import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProduitsComponent } from './delete-produits.component';

describe('DeleteProduitsComponent', () => {
  let component: DeleteProduitsComponent;
  let fixture: ComponentFixture<DeleteProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProduitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
