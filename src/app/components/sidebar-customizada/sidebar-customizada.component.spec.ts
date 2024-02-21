import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCustomizadaComponent } from './sidebar-customizada.component';

describe('SidebarCustomizadaComponent', () => {
  let component: SidebarCustomizadaComponent;
  let fixture: ComponentFixture<SidebarCustomizadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarCustomizadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarCustomizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
