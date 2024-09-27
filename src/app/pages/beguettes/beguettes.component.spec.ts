import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeguettesComponent } from './beguettes.component';

describe('BeguettesComponent', () => {
  let component: BeguettesComponent;
  let fixture: ComponentFixture<BeguettesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeguettesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeguettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
