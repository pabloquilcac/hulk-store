import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoKardexComponent } from './dialogo-kardex.component';

describe('DialogoKardexComponent', () => {
  let component: DialogoKardexComponent;
  let fixture: ComponentFixture<DialogoKardexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoKardexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoKardexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
