import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateListingDto } from './dto/create-listing.dto'
import { Listing } from './listing.entity'

@Injectable()
export class ListingService {
    constructor(
        @InjectRepository(Listing)
        private readonly listingRepo: Repository<Listing>
    ) {}

    async findAll(): Promise<Listing[]> {
        return await this.listingRepo.find()
    }

    async findOne(id: number): Promise<Listing> {
        return await this.listingRepo.findOne(id)
    }

    async create(listing: CreateListingDto): Promise<Listing> {
        const newListing = this.listingRepo.create({
            ...listing,
            userId: 1,
            pictureUrl: null
        })

        return await this.listingRepo.save(newListing)
    }
}
