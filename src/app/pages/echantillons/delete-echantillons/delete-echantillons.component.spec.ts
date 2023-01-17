import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEchantillonsComponent } from './delete-echantillons.component';

describe('DeleteEchantillonsComponent', () => {
  let component: DeleteEchantillonsComponent;
  let fixture: ComponentFixture<DeleteEchantillonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEchantillonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteEchantillonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
