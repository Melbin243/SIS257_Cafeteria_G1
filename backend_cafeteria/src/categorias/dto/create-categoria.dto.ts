import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateCategoriaDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo nombre no debe ser vacio'})
    @IsString({ message: 'El campo nombre debe ser de tipo cadena'})
    @MaxLength(40, { message: 'El campo nombre no debe ser mayor a 40 caracteres'})
    readonly nombre: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo estado no debe ser vacio' })
    readonly estado: boolean;
}
