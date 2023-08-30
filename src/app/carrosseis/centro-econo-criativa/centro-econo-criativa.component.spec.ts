import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroEconoCriativaComponent } from './centro-econo-criativa.component';

describe('CentroEconoCriativaComponent', () => {
  let component: CentroEconoCriativaComponent;
  let fixture: ComponentFixture<CentroEconoCriativaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentroEconoCriativaComponent]
    });
    fixture = TestBed.createComponent(CentroEconoCriativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
