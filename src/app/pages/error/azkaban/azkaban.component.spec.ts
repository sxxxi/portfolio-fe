import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzkabanComponent } from './azkaban.component';

describe('AzkabanComponent', () => {
  let component: AzkabanComponent;
  let fixture: ComponentFixture<AzkabanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AzkabanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AzkabanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
