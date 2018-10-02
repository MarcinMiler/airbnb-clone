import { IsEmail, IsNotEmpty, Min, MinLength } from 'class-validator'

export class RegisterDto {
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    @MinLength(3)
    password: string
}
