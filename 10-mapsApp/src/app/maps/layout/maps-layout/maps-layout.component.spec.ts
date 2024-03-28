import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsLayoutComponent } from './maps-layout.component';

describe('MapsLayoutComponent', () => {
  let component: MapsLayoutComponent;
  let fixture: ComponentFixture<MapsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapsLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
