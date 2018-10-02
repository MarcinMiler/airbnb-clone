import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateListingDto } from './dto/create-listing.dto'
import { Listing } from 'graphql.schema'

@Injectable()
export class ListingService {
    constructor(
        @InjectRepository(Listing)
        private readonly listingRepo: Repository<Listing>
    ) {}

    async findAll(): Promise<Listing[]> {
        return await this.listingRepo.find()
    }

    async create(listing: CreateListingDto): Promise<Listing> {
        const newListing = this.listingRepo.create({ ...listing })

        return await this.listingRepo.save(newListing)
    }
}
