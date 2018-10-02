import * as bcrypt from 'bcryptjs'
import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    BeforeInsert
} from 'typeorm'

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    password: string

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10)
    }
}
