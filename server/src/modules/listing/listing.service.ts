import { Injectable } from '@nestjs/common'

@Injectable()
export class ListingService {
    private readonly listings: any = ['listing']

    findAll() {
        return this.listings
    }
}
