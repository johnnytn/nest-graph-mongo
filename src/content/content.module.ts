import { Module } from '@nestjs/common'
import { ContentService } from './content.service'
import { ContentResolver } from './content.resolver'
import { MongooseModule } from '@nestjs/mongoose'
import { Content, ContentSchema } from './entities/content.entity'
//import { Content, ContentSchema } from './content.schema'

@Module({
  imports: [MongooseModule.forFeature([{name: Content.name , schema: ContentSchema}])],
  providers: [ContentResolver, ContentService]
})
export class ContentModule {}
