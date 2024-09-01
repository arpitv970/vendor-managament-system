import { Test, TestingModule } from '@nestjs/testing';
import { HistoricalPerformanceService } from './historical-performance.service';

describe('HistoricalPerformanceService', () => {
  let service: HistoricalPerformanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistoricalPerformanceService],
    }).compile();

    service = module.get<HistoricalPerformanceService>(
      HistoricalPerformanceService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
