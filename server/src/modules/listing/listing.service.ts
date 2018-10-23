import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, getRepository } from 'typeorm'

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

    async searchListings(args) {
        return await getRepository(Listing)
            .createQueryBuilder('l')
            .where(`l.addressTags @> '{${args.address || []}}'`)
            .andWhere(`l.guests >= :guests`, { guests: args.guests || 1 })
            .andWhere(`l.price between :priceMin and :priceMax`, {
                priceMin: args.priceMin || 0,
                priceMax: args.priceMax || 999999
            })
            .getMany()
    }

    async create(listing: CreateListingDto, user): Promise<Listing> {
        const newListing = this.listingRepo.create({
            ...listing,
            userId: user.id,
            pictureUrl: null
        })

        return await this.listingRepo.save(newListing)
    }
}
