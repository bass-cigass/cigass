import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmplacementsComponent } from './create-emplacements.component';

describe('CreateEmplacementsComponent', () => {
  let component: CreateEmplacementsComponent;
  let fixture: ComponentFixture<CreateEmplacementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmplacementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEmplacementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
