import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicosComponent } from './electronicos.component';

describe('ElectronicosComponent', () => {
  let component: ElectronicosComponent;
  let fixture: ComponentFixture<ElectronicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectronicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
