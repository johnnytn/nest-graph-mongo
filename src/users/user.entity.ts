import { ApiProperty } from "@nestjs/swagger"
import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    /* @ObjectIdColumn() */
    @ObjectIdColumn()
    id: number

    @ApiProperty()
    @Column()
    username: string

    @ApiProperty()
    @Column()
    password: string
}