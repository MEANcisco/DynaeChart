import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvotransComponent } from './evotrans.component';

describe('EvotransComponent', () => {
  let component: EvotransComponent;
  let fixture: ComponentFixture<EvotransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvotransComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvotransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
