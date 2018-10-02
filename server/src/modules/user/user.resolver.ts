import { Resolver, Mutation, Args } from '@nestjs/graphql'

import { UserService } from './user.service'
import { RegisterDto } from './dto/register.dto'

@Resolver('User')
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Mutation('register')
    async register(@Args('input') register: RegisterDto) {
        return await this.userService.register(register)
    }

    @Mutation('login')
    async login(@Args('input') login: RegisterDto) {
        return await this.userService.login(login)
    }
}
