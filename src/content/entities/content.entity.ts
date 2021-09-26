import { ObjectType, Field, Int, ID } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
@ObjectType()
export class Content {
  @Field(() => ID)
  _id: string

  @Prop({ required: true })
  @Field({ nullable: false })
  name: string  
  
  @Prop()
  @Field({ nullable: true })
  description?: string  
  
  @Prop()
  @Field()
  type: string  
}

export type ContentDocument = Content & Document
export const ContentSchema = SchemaFactory.createForClass(Content)
