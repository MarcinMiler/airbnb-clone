import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ListingResolver } from './listing.resolver'
import { ListingService } from './listing.service'
import { Listing } from './listing.entity'

@Module({
    imports: [TypeOrmModule.forFeature([Listing])],
    providers: [ListingResolver, ListingService]
})
export class ListingModule {}
