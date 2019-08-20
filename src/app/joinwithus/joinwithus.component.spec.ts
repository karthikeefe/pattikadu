import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinwithusComponent } from './joinwithus.component';

describe('JoinwithusComponent', () => {
  let component: JoinwithusComponent;
  let fixture: ComponentFixture<JoinwithusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinwithusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinwithusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
