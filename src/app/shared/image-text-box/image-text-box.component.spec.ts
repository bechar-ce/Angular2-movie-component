import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDialogBoxComponent } from './image-text-box.component';

describe('ImageDialogBoxComponent', () => {
  let component: ImageDialogBoxComponent;
  let fixture: ComponentFixture<ImageDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
