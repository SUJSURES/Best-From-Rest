import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfrFooterComponent } from './bfr-footer.component';

describe('BfrFooterComponent', () => {
  let component: BfrFooterComponent;
  let fixture: ComponentFixture<BfrFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BfrFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BfrFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
