import { InputType, Int, Field, ID } from '@nestjs/graphql';
@InputType()
export class FindContentInput {  
  @Field(() => ID)
  _id: string
}
