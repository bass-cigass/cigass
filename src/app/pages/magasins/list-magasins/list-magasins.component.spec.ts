import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMagasinsComponent } from './list-magasins.component';

describe('ListMagasinsComponent', () => {
  let component: ListMagasinsComponent;
  let fixture: ComponentFixture<ListMagasinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMagasinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMagasinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
