import { Module, forwardRef } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AuthModule } from '../auth/auth.module'
import { User } from './user.entity'
import { UserResolver } from './user.resolver'
import { UserService } from './user.service'

@Module({
    imports: [TypeOrmModule.forFeature([User]), forwardRef(() => AuthModule)],
    providers: [UserResolver, UserService],
    exports: [UserService]
})
export class UserModule {}
