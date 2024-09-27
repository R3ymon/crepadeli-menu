import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrepasdulcesComponent } from './crepasdulces.component';

describe('CrepasdulcesComponent', () => {
  let component: CrepasdulcesComponent;
  let fixture: ComponentFixture<CrepasdulcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrepasdulcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrepasdulcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
