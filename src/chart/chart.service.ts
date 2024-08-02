import { Injectable } from '@nestjs/common';
import { CreateChartDto } from './dto/create-chart.dto';
import { UpdateChartDto } from './dto/update-chart.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChartService {
  constructor(private readonly prisma: PrismaService){}

  create(createChartDto: CreateChartDto) {
    return this.prisma.chart.create({
      data: {
        quantity : createChartDto.quantity,
        productId : createChartDto.productId
      }
    });
  }

  findAll() {
    return this.prisma.chart.findMany(
      { include: {
        product: true, 
      },}
    );
  }

  findOne(id: number) {
    return this.prisma.chart.findUnique({
      where: { id },
    });
  }

  update(id: number, updateChartDto: UpdateChartDto) {
    return this.prisma.chart.update({
      where: { id },
      data: updateChartDto,
    });
  }

  remove(id: number) {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}
