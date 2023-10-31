import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateClienteDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre no puede estar vacio' })
  @IsString({ message: 'El campo nombre debe ser de tipo texto' })
  @MaxLength(40, {
    message: 'El campo nombre no puede tener mas de 40 carácteres',
  })
  readonly nombre: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo apellido paterno no puede estar vacio' })
  @IsString({ message: 'El campo apellido paterno debe ser de tipo texto' })
  @MaxLength(40, {
    message: 'El campo apellido paterno no puede tener mas de 40 carácteres',
  })
  readonly apellidoPaterno: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo apellido materno no puede estar vacio' })
  @IsString({ message: 'El campo apellido materno debe ser de tipo texto' })
  @MaxLength(40, {
    message: 'El campo apellido materno no puede tener mas de 40 carácteres',
  })
  readonly apellidoMaterno: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo dirección no puede estar vacio' })
  @IsString({ message: 'El campo dirección debe ser de tipo texto' })
  @MaxLength(40, {
    message: 'El campo dirección no puede tener mas de 40 carácteres',
  })
  readonly direccion: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo celular no puede estar vacio' })
  @IsString({ message: 'El campo celular debe ser de tipo texto' })
  @MaxLength(8, {
    message: 'El campo celular no puede tener mas de 8 carácteres',
  })
  readonly celular: string;
}
