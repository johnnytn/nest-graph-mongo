import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql'
import { ContentService } from './content.service'
import { Content } from './entities/content.entity'
import { CreateContentInput } from './dto/create-content.input'
import { UpdateContentInput } from './dto/update-content.input'

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

  @Mutation(() => Content)
  createContent(@Args('input') content: CreateContentInput) {
    return this.contentService.create(content)
  }

  /* @ResolveField()
  async users(@Parent() parent: Content) {
    return this.contentService.findByContentId(parent.id)
  } */


 /*  @Mutation(() => Content)
  createContent(@Args('createContentInput') createContentInput: CreateContentInput) {
    return this.contentService.create(createContentInput)
  }

  @Query(() => String)
  async hello() {
    return 'herlo'
  }

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
