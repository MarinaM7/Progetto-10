import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAttiviComponent } from './post-attivi.component';

describe('PostAttiviComponent', () => {
  let component: PostAttiviComponent;
  let fixture: ComponentFixture<PostAttiviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAttiviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAttiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
