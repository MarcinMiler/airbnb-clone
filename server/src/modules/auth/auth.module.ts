import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

import { UserModule } from '../user/user.module'
import { AuthService } from './auth.service'
import { JwtStrategy } from './jwt.strategy'

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secretOrPrivateKey: 'secretKey',
            signOptions: {
                expiresIn: 3600
            }
        }),
        UserModule
    ],
    providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
