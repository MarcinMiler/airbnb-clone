import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import * as bcrypt from 'bcryptjs'

import { User } from './user.entity'
import { RegisterDto } from './dto/register.dto'
import { RegisterResponse, LoginResponse } from 'graphql.schema'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepo: Repository<User>
    ) {}

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

        const token = 'sdgfsdfg'

        return {
            ok: true,
            token
        }
    }

    async findOne(id: number): Promise<User> {
        return await this.userRepo.findOne(id)
    }
}
