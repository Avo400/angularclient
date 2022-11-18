import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonUser3ListComponent } from './mon-user3-list.component';

describe('MonUser3ListComponent', () => {
  let component: MonUser3ListComponent;
  let fixture: ComponentFixture<MonUser3ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonUser3ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonUser3ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
