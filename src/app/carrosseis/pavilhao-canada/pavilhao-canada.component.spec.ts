import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PavilhaoCanadaComponent } from './pavilhao-canada.component';

describe('PavilhaoCanadaComponent', () => {
  let component: PavilhaoCanadaComponent;
  let fixture: ComponentFixture<PavilhaoCanadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PavilhaoCanadaComponent]
    });
    fixture = TestBed.createComponent(PavilhaoCanadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
