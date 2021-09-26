import { Module } from '@nestjs/common'
import { UsersModule } from './users/users.module'
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm'
import { MongooseModule } from '@nestjs/mongoose'
import { join } from 'path'
import { ContentModule } from './content/content.module';

// todo add to .env
const MONGO_PASSWORD = 'hTsSEclnuXJeWhkY'
@Module({
  // MongooseModule.forRoot(`mongodb+srv://admin:${MONGO_PASSWORD}@cluster0.tspee.mongodb.net/nestjs-demo?retryWrites=true&w=majority`)
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
    }),
    MongooseModule.forRoot(`mongodb+srv://admin:${MONGO_PASSWORD}@cluster0.tspee.mongodb.net/nestjs-demo?retryWrites=true&w=majority`),
   // UsersModule,
    ContentModule]
  /* controllers: [UsersController],
  providers: [UsersService], */
})
export class AppModule { }

  // TypeOrmModule.forRoot({
    // type: 'mongodb',
    // url:
      // `mongodb+srv://admin:${MONGO_PASSWORD}@cluster0.tspee.mongodb.net/nestjs-demo?retryWrites=true&w=majority`,
    // entities: [join(__dirname, '**/**.entity{.ts,.js}')],
    // synchronize: true,
    // useNewUrlParser: true,
  //   logging: true,
  // })
