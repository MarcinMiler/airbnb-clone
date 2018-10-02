import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { join } from 'path'

import { ListingModule } from 'modules/listing/listing.module'
import { UserModule } from 'modules/user/user.module'

@Module({
    imports: [
        UserModule,
        ListingModule,
        TypeOrmModule.forRoot(),
        GraphQLModule.forRoot({
            typePaths: ['./**/*.graphql'],
            definitions: {
                path: join(process.cwd(), 'src/graphql.schema.ts'),
                outputAs: 'class'
            }
        })
    ]
})
export class AppModule {}