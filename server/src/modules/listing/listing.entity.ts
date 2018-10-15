import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne
} from 'typeorm'
import { User } from '../user/user.entity'

@Entity()
export class Listing extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    category: string

    @Column({ nullable: true })
    pictureUrl: string

    @Column()
    description: string

    @Column()
    price: number

    @Column()
    beds: number

    @Column()
    guests: number

    @Column('double precision')
    lat: number

    @Column('double precision')
    lng: number

    @Column({ type: 'text', array: true })
    amenities: string[]

    @Column()
    address: string

    @Column({ type: 'text', array: true })
    addressTags: string[]

    @Column()
    userId: number

    @ManyToOne(() => User, user => user.listings)
    user: User
}
