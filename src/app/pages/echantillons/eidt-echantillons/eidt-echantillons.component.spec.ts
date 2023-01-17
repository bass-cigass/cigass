import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EidtEchantillonsComponent } from './eidt-echantillons.component';

describe('EidtEchantillonsComponent', () => {
  let component: EidtEchantillonsComponent;
  let fixture: ComponentFixture<EidtEchantillonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EidtEchantillonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EidtEchantillonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
