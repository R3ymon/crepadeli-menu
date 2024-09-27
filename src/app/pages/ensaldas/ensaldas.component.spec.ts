import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsaldasComponent } from './ensaldas.component';

describe('EnsaldasComponent', () => {
  let component: EnsaldasComponent;
  let fixture: ComponentFixture<EnsaldasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnsaldasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnsaldasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
