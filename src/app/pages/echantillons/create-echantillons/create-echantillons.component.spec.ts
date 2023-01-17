import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEchantillonsComponent } from './create-echantillons.component';

describe('CreateEchantillonsComponent', () => {
  let component: CreateEchantillonsComponent;
  let fixture: ComponentFixture<CreateEchantillonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEchantillonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEchantillonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
