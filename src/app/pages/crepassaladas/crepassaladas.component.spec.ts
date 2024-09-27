import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrepassaladasComponent } from './crepassaladas.component';

describe('CrepassaladasComponent', () => {
  let component: CrepassaladasComponent;
  let fixture: ComponentFixture<CrepassaladasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrepassaladasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrepassaladasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
