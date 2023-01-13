import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProjetDto {
    @ApiProperty({
        description: 'The reference of the Product',
        example: '89039-658',
      })
      @IsNotEmpty()
      @IsString()
      designation: string;

 
}
