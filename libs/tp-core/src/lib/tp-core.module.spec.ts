import { async, TestBed } from '@angular/core/testing';
import { TpCoreModule } from './tp-core.module';

describe('TpCoreModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [TpCoreModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(TpCoreModule).toBeDefined();
  });
});
