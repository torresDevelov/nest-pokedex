import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {


    @Min(1, {message : "El valor debe ser 1 como minimo"})
    @IsPositive()
    @IsInt()
    no: number;


    @IsString()
    @MinLength(1, { message: 'La longitud minima debe ser 1' })
    name: string;
}
