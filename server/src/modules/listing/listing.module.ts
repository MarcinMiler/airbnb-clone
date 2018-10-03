import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PassportModule } from '@nestjs/passport'

import { ListingResolver } from './listing.resolver'
import { ListingService } from './listing.service'
import { Listing } from './listing.entity'

@Module({
    imports: [
        TypeOrmModule.forFeature([Listing]),
        PassportModule.register({ defaultStrategy: 'jwt' })
    ],
    providers: [ListingResolver, ListingService]
})
export class ListingModule {}
