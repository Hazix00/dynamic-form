import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeInputComponent } from './tree-input.component';

describe('TreeInputComponent', () => {
  let component: TreeInputComponent;
  let fixture: ComponentFixture<TreeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
