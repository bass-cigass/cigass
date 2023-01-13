import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { User } from "src/components/users/entities/user.entity";
import { CreateDateColumn } from "typeorm";

export class CreateProductDto {
    @ApiProperty({
        description: 'The reference of the Product',
        example: '89039-658',
      })
      @IsNotEmpty()
      @IsString()
      ref: string;
    
      @ApiProperty({
        description: 'The description of the Product',
        example: 'Disposable / tube centrifuge 50 ml',
      })
      @IsNotEmpty()
      @IsString()
      libelle: string;
    

      @ApiProperty({
        description: 'The type of the Product',
        example: 'Disposable / tube centrifuge 50 ml',
      })
      @IsNotEmpty()
      @IsString()
      type: string;

      @ApiProperty({
        description: 'The quantite of the Product',
        example: '772',
      })
      @IsNotEmpty()
      @IsNumber()
      quantite: number;
    
      @ApiProperty({
        description: 'The limit we start send alert the lack of product',
        example: '234',
      })
      @IsNotEmpty()
      @IsNumber()
      seuil: number;
    


    //   @ApiProperty({
    //     description: 'The entry date of product',
    //     example: '10/01/2023',
    //   })
    //   @IsNotEmpty()
    //   @IsDate()
    //   @CreateDateColumn({default: Date.now()})
    //   date_entree: Date;

      @ApiProperty({
        description: 'The expiration date of product',
        example: '10/01/2028',
      })
      @IsNotEmpty()
      @IsDate()
      date_exp: Date;

      @IsNotEmpty({"message" : "Seems like something went wrong! please try again"})
      user : User
}
