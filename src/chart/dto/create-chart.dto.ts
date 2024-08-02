import { IsString, IsOptional, IsInt } from 'class-validator';
export class CreateChartDto {
    @IsString()
    quantity: string;
  
    @IsInt()
    productId: number;
}
