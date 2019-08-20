import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateusComponent } from './donateus.component';

describe('DonateusComponent', () => {
  let component: DonateusComponent;
  let fixture: ComponentFixture<DonateusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonateusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
