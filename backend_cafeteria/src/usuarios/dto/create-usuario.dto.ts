import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUsuarioDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo usuario no puede estar vacio' })
  @IsString({ message: 'El campo usuario debe ser de tipo texto' })
  @MaxLength(30, {
    message: 'El campo usuario no puede tener mas de 30 carácteres',
  })
  readonly usuario: string;

  // @ApiProperty()
  // @IsNotEmpty({ message: 'El campo clave no puede estar vacio' })
  // @IsString({ message: 'El campo clave debe ser de tipo texto' })
  // @MaxLength(35, {
  //   message: 'El campo clave no puede tener mas de 35 carácteres',
  // })
  // readonly clave: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo email no debe ser vacio' })
  @IsEmail({}, { message: 'El campo email debe ser un email válido' })
  @MaxLength(100, {
    message: 'El campo email no debe ser mayor a 100 caracteres',
  })
  readonly email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo rol no puede estar vacio' })
  @IsString({ message: 'El campo rol debe ser de tipo texto' })
  @MaxLength(20, {
    message: 'El campo rol no puede tener mas de 20 carácteres',
  })
  readonly rol: string;
}
