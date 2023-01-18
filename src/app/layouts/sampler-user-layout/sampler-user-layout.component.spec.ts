import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplerUserLayoutComponent } from './sampler-user-layout.component';

describe('SamplerUserLayoutComponent', () => {
  let component: SamplerUserLayoutComponent;
  let fixture: ComponentFixture<SamplerUserLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplerUserLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplerUserLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
