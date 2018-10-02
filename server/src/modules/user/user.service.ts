import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { JwtService } from '@nestjs/jwt'
import { Repository } from 'typeorm'
import * as bcrypt from 'bcryptjs'

import { User } from './user.entity'
import { RegisterDto } from './dto/register.dto'
import { RegisterResponse, LoginResponse } from 'graphql.schema'
import { JwtPayload } from './interfaces/JwtPayload.interface'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepo: Repository<User>,
        private readonly jwtService: JwtService
    ) {}

    private createToken(id: number) {
        const data: JwtPayload = { id }

        const token = this.jwtService.sign({ data })

        return token
    }

    async register(register: RegisterDto): Promise<RegisterResponse> {
        const { email } = register

        const checkIfEmailExists = await this.userRepo.findOne({
            where: { email }
        })

        if (checkIfEmailExists) {
            return {
                ok: false
            }
        }

        try {
            const newUser = this.userRepo.create({ ...register })
            await this.userRepo.save(newUser)

            return {
                ok: true
            }
        } catch (err) {
            return {
                ok: false
            }
        }
    }

    async login(login: RegisterDto): Promise<LoginResponse> {
        const { email, password } = login

        const findUserByEmail = await this.userRepo.findOne({
            where: { email }
        })

        if (!findUserByEmail) {
            return {
                ok: false,
                token: null
            }
        }

        const comparePasswords = await bcrypt.compare(
            password,
            findUserByEmail.password
        )

        if (!comparePasswords) {
            return {
                ok: false,
                token: null
            }
        }

        const token = this.createToken(findUserByEmail.id)

        return {
            ok: true,
            token
        }
    }
}
