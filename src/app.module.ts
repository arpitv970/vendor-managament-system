import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import load from 'src/config';
import { DatabaseService } from './config/database.service';
import { VendorsModule } from './vendors/vendors.module';
import { PurchaseOrdersModule } from './purchase-orders/purchase-orders.module';
import { HistoricalPerformanceModule } from './historical-performance/historical-performance.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseService,
    }),
    VendorsModule,
    PurchaseOrdersModule,
    HistoricalPerformanceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
