import { async, TestBed } from '@angular/core/testing';
import { TpCommonModule } from './tp-common.module';

describe('TpCommonModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [TpCommonModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(TpCommonModule).toBeDefined();
  });
});
