import { Resolver, Query } from '@nestjs/graphql'
import { ListingService } from './listing.service'

@Resolver('Listing')
export class ListingResolver {
    constructor(private readonly listingService: ListingService) {}

    @Query('listings')
    findAll() {
        return this.listingService.findAll()
    }
}
