import { Module } from '@nestjs/common';
import { HistoricalPerformanceController } from './historical-performance.controller';
import { HistoricalPerformanceService } from './historical-performance.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoricalPerformance } from './historical-performance.entity';
import { Vendor } from 'src/vendors/vendors.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HistoricalPerformance, Vendor])],
  controllers: [HistoricalPerformanceController],
  providers: [HistoricalPerformanceService],
})
export class HistoricalPerformanceModule {}
