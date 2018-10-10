import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'

import { GqlAuthGuard } from '../auth/guards/GqlAuthGuard'
import { ListingService } from './listing.service'
import { Listing } from '../../graphql.schema'
import { CreateListingDto } from './dto/create-listing.dto'

@Resolver('Listing')
export class ListingResolver {
    constructor(private readonly listingService: ListingService) {}

    @Query('listings')
    findAll(): Promise<Listing[]> {
        return this.listingService.findAll()
    }

    @Query('listing')
    findOne(@Args('id') id: number): Promise<Listing> {
        return this.listingService.findOne(id)
    }

    @Mutation('createListing')
    // @UseGuards(new GqlAuthGuard())
    async create(@Args('input') args: CreateListingDto): Promise<Listing> {
        return this.listingService.create(args)
    }
}
