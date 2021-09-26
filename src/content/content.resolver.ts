import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql'
import { ContentService } from './content.service'
import { Content } from './entities/content.entity'
import { CreateContentInput } from './dto/create-content.input'
import { UpdateContentInput } from './dto/update-content.input'
import { FindContentInput } from './dto/find-content.input'

@Resolver(() => Content)
export class ContentResolver {
  constructor(private readonly contentService: ContentService) {}
  @Query(() => String)
  async hello() {
    return 'herlo'
  }

  @Query(() => [Content])
  async contents() {
    return this.contentService.findAll()
  }
  @Query(() => [Content])
  async contentsMany() {
    return this.contentService.findMany()
  }
  @Query(() => Content)
  findContent(@Args('input') content: FindContentInput) {
    return this.contentService.findById(content._id)
  }

  @Mutation(() => Content)
  createContent(@Args('input') content: CreateContentInput) {
    return this.contentService.create(content)
  }
 
  /* @ResolveField()
  async users(@Parent() parent: Content) {
    return this.contentService.findByContentId(parent.id)
  } */


 /* 
  @Query(() => [Content], { name: 'content' })
  findAll() {
    return this.contentService.findAll()
  }

  @Query(() => Content, { name: 'content' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.contentService.findOne(id)
  }

  @Mutation(() => Content)
  updateContent(@Args('updateContentInput') updateContentInput: UpdateContentInput) {
    return this.contentService.update(updateContentInput.id, updateContentInput)
  }

  @Mutation(() => Content)
  removeContent(@Args('id', { type: () => Int }) id: number) {
    return this.contentService.remove(id)
  } */
}
