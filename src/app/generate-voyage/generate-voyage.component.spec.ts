import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateVoyageComponent } from './generate-voyage.component';

describe('GenerateVoyageComponent', () => {
  let component: GenerateVoyageComponent;
  let fixture: ComponentFixture<GenerateVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateVoyageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
