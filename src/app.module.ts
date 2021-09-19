import { Module } from '@nestjs/common'
import { UsersModule } from './users/users.module'
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm'
// import { MongooseModule } from '@nestjs/mongoose'
import { join } from 'path'

// todo change
const MONGO_PASSWORD = 'hTsSEclnuXJeWhkY'
// TypeOrmModule.forRoot({
//   type: 'mongodb',
//   url:
//     `mongodb+srv://admin:${MONGO_PASSWORD}@cluster0.tspee.mongodb.net/nestjs-demo?retryWrites=true&w=majority`,
//   entities: [join(__dirname, '**/**.entity{.ts,.js}')],
//   synchronize: true,
//   useNewUrlParser: true,
//   logging: true,
// })
@Module({
  // MongooseModule.forRoot(`mongodb+srv://admin:${MONGO_PASSWORD}@cluster0.tspee.mongodb.net/nestjs-demo?retryWrites=true&w=majority`)
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      playground: true
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url:
        `mongodb+srv://admin:${MONGO_PASSWORD}@cluster0.tspee.mongodb.net/nestjs-demo?retryWrites=true&w=majority`,
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
      useNewUrlParser: true,
      logging: true,
    }), UsersModule]
  /* controllers: [UsersController],
  providers: [UsersService], */
})
export class AppModule { }
