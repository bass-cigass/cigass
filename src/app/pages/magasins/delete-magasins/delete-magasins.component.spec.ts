import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMagasinsComponent } from './delete-magasins.component';

describe('DeleteMagasinsComponent', () => {
  let component: DeleteMagasinsComponent;
  let fixture: ComponentFixture<DeleteMagasinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMagasinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteMagasinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
