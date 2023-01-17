import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEchantillonsComponent } from './list-echantillons.component';

describe('ListEchantillonsComponent', () => {
  let component: ListEchantillonsComponent;
  let fixture: ComponentFixture<ListEchantillonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEchantillonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEchantillonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
