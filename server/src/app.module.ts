import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'

import { ListingModule } from 'modules/listing/listing.module'

@Module({
    imports: [
        ListingModule,
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
