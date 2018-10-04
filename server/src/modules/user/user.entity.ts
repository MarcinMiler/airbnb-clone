import * as bcrypt from 'bcryptjs'
import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    BeforeInsert,
    OneToMany
} from 'typeorm'
import { Listing } from '../listing/listing.entity'

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    password: string

    @OneToMany(() => Listing, listing => listing.user)
    listings: Listing[]

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10)
    }
}
