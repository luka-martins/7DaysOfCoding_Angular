import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDeExemploComponent } from './pagina-de-exemplo.component';

describe('PaginaDeExemploComponent', () => {
  let component: PaginaDeExemploComponent;
  let fixture: ComponentFixture<PaginaDeExemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaDeExemploComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaDeExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
