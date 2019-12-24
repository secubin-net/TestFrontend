import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformatorComponent } from './transformator.component';

describe('TransformatorComponent', () => {
  let component: TransformatorComponent;
  let fixture: ComponentFixture<TransformatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
