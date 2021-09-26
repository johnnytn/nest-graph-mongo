import { InputType, Int, Field } from '@nestjs/graphql';
@InputType()
export class CreateContentInput {  
  @Field({ nullable: false })
  name: string  
  
  @Field({ nullable: true })
  description?: string  
  
  @Field()
  type: string
}
