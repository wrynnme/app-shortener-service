import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenlinkComponent } from './shortenlink.component';

describe('ShortenlinkComponent', () => {
  let component: ShortenlinkComponent;
  let fixture: ComponentFixture<ShortenlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortenlinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortenlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
