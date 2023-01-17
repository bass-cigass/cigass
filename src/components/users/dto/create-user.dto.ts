import { ApiProperty } from "@nestjs/swagger";
import { MESSAGES, REGEX } from "app.utils";
import { IsEmail, IsNotEmpty, IsNumber, IsString, Length, Matches } from "class-validator";

export class CreateUserDto {
    @ApiProperty({
        description: 'The lastname of the User',
        example: 'Doe',
      })
      @IsNotEmpty()
      @IsString()
      nom: string;
    
      @ApiProperty({
        description: 'The firstname of the User',
        example: 'Jhon',
      })
      @IsNotEmpty()
      @IsString()
      prenom: string;
  

      @ApiProperty({
        description: 'The tel of the User',
        example: '772345798',
      })
      @IsNotEmpty()
      @IsNumber()
      tel: number;
    
      @ApiProperty({
        description: 'The email address of the User',
        example: 'jhon.doe@gmail.com',
      })
      @IsNotEmpty()
      @IsEmail()
      email: string;
    
      @ApiProperty({
        description: 'The password of the User',
        example: 'Password@123',
      })
      @IsNotEmpty()
      @Length(8, 24)
      @Matches(REGEX.PASSWORD_RULE, { message: MESSAGES.PASSWORD_RULE_MESSAGE })
      mdp: string;

      @ApiProperty({
        description: 'Confirm the password',
        example: 'Password@123',
      })
      @IsNotEmpty()
      @Length(8, 24)
      @Matches(REGEX.PASSWORD_RULE, { message: MESSAGES.PASSWORD_RULE_MESSAGE })
      confirm: string;


}
