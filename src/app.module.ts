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
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
    }),
    MongooseModule.forRoot(`mongodb+srv://admin:${MONGO_PASSWORD}@cluster0.tspee.mongodb.net/nestjs-demo?retryWrites=true&w=majority`),
   // UsersModule,
    ContentModule]
})
export class AppModule { }

