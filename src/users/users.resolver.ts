import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UserInput } from './user.input';

@Resolver('User')
export class UserResolver {
    constructor(private readonly usersService: UsersService) { }

    @Query(() => String)
    async hello() {
        return await 'world';
    }

    @Query(() => [User])
    async users() {
        return this.usersService.findAll();
    }

    @Mutation(() => User)
    async createUser(@Args('input') input: UserInput) {
        return await this.usersService.create(input);
    }
}