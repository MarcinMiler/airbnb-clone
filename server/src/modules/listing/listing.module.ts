import { Module } from '@nestjs/common'
import { ListingResolver } from './listing.resolver'
import { ListingService } from './listing.service'

@Module({
    providers: [ListingResolver, ListingService]
})
export class ListingModule {}
