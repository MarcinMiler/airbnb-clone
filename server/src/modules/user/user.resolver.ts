import { Resolver, Mutation, Args, Query } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'

import { UserService } from './user.service'
import { RegisterDto } from './dto/register.dto'
import { Usr } from './user.decorator'
import { User } from './user.entity'
import { GqlAuthGuard } from '../auth/guards/GqlAuthGuard'

@Resolver('User')
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query('me')
    @UseGuards(new GqlAuthGuard())
    me(@Usr() user: User) {
        return user
    }

    @Mutation('register')
    async register(@Args('input') register: RegisterDto) {
        return await this.userService.register(register)
    }

    @Mutation('login')
    async login(@Args('input') login: RegisterDto) {
        return await this.userService.login(login)
    }
}
