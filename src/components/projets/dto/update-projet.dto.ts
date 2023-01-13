import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateProjetDto } from './create-projet.dto';

export class UpdateProjetDto extends OmitType(CreateProjetDto , [] as const ) {
    id: number;
}
