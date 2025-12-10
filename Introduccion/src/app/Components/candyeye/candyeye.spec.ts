import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Candyeye } from './candyeye';

describe('Candyeye', () => {
  let component: Candyeye;
  let fixture: ComponentFixture<Candyeye>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Candyeye]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Candyeye);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
