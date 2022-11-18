import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonUser3FormComponent } from './mon-user3-form.component';

describe('MonUser3FormComponent', () => {
  let component: MonUser3FormComponent;
  let fixture: ComponentFixture<MonUser3FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonUser3FormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonUser3FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
