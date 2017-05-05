import { TestBed, inject } from '@angular/core/testing';

import { ImageTextBoxService } from './image-text-box.service';

describe('ImageTextBoxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageTextBoxService]
    });
  });

  it('should ...', inject([ImageTextBoxService], (service: ImageTextBoxService) => {
    expect(service).toBeTruthy();
  }));
});
