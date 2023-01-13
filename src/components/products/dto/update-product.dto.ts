import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends  OmitType(CreateProductDto, [] as const) {
    id: number;
}
