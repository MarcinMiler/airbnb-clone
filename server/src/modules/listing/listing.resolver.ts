import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'

import { ListingService } from './listing.service'
import { Listing } from 'graphql.schema'
import { CreateListingDto } from './dto/create-listing.dto'

@Resolver('Listing')
export class ListingResolver {
    constructor(private readonly listingService: ListingService) {}

    @Query('listings')
    findAll(): Promise<Listing[]> {
        return this.listingService.findAll()
    }

    @Mutation('createListing')
    async create(@Args('input') args: CreateListingDto): Promise<Listing> {
        return this.listingService.create(args)
    }
}
