import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { ChartModule } from './chart/chart.module';

@Module({
  imports: [PrismaModule, ProductModule, ChartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
