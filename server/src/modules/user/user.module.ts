import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { JwtModule } from '@nestjs/jwt'

import { User } from './user.entity'
import { UserResolver } from './user.resolver'
import { UserService } from './user.service'

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            secretOrPrivateKey: 'secretKey',
            signOptions: {
                expiresIn: 3600
            }
        })
    ],
    providers: [UserResolver, UserService]
})
export class UserModule {}
