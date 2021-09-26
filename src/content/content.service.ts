import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateContentInput } from './dto/create-content.input'
import { UpdateContentInput } from './dto/update-content.input'
import { Content, ContentDocument } from './entities/content.entity'

@Injectable()
export class ContentService {
  contents: Partial<Content>[]
  constructor(@InjectModel(Content.name) private contentModel: Model<ContentDocument>) {
    // this.contents = contents
  }

  async create(content: CreateContentInput): Promise<Content> {
    const createContent = new this.contentModel(content)
    return createContent.save()
  }

  async findAll(): Promise<Content[]> {
    return this.contentModel.find().exec()
  }
  async findMany(): Promise<Content[]> {
    return this.contentModel.find().lean()
  }
  async findById(id) {
    return this.contentModel.findById(id).lean()
  }

/* 
  async  update(id: number, updateContentInput: UpdateContentInput) {
    return `This action updates a #${id} content`
  }

  async  remove(id: number) {
    return `This action removes a #${id} content`
  } */
}
