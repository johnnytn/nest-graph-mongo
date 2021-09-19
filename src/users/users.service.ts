import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { MongoRepository } from 'typeorm'
import { User } from './user.entity'
import { UserInput } from './user.input'
import * as uuid from 'uuid'

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
    /*  private readonly */
    constructor(@InjectRepository(User) repo/* : MongoRepository<User> */) {
        super(repo)
    }
    async findAll(): Promise<User[]> {
        return this.repo.find()
    }

    async create(input: UserInput): Promise<User> {
        const user = new User()
        user.id = uuid.v4()
        user.username = input.username
        user.password = input.password
        return this.repo.save(user)
    }
}
