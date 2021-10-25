import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHeroReactiveComponent } from './add-hero-reactive.component';

describe('AddHeroReactiveComponent', () => {
  let component: AddHeroReactiveComponent;
  let fixture: ComponentFixture<AddHeroReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHeroReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHeroReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
