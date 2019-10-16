import {inject, TestBed} from '@angular/core/testing';

import { RandomService } from './random.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('RandomService', () => {


  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
        providers: [
            RandomService
        ]
    });

  });


  it('should be initialized', inject([RandomService], (service: RandomService) => {
    expect(service).toBeTruthy();
  }));
});
