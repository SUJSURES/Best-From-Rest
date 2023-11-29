import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfrHeaderComponent } from './bfr-header.component';

describe('BfrHeaderComponent', () => {
  let component: BfrHeaderComponent;
  let fixture: ComponentFixture<BfrHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BfrHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BfrHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
