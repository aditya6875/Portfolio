import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingstatsComponent } from './codingstats.component';

describe('CodingstatsComponent', () => {
  let component: CodingstatsComponent;
  let fixture: ComponentFixture<CodingstatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodingstatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodingstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
