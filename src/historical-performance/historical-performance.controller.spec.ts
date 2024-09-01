import { Test, TestingModule } from '@nestjs/testing';
import { HistoricalPerformanceController } from './historical-performance.controller';

describe('HistoricalPerformanceController', () => {
  let controller: HistoricalPerformanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistoricalPerformanceController],
    }).compile();

    controller = module.get<HistoricalPerformanceController>(
      HistoricalPerformanceController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
