import { IsEmail, IsNotEmpty, Min } from 'class-validator'

export class RegisterDto {
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    @Min(3)
    password: string
}
