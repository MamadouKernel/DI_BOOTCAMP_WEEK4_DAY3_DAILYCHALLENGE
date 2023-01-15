import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionfocusComponent } from './sectionfocus.component';

describe('SectionfocusComponent', () => {
  let component: SectionfocusComponent;
  let fixture: ComponentFixture<SectionfocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionfocusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionfocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
