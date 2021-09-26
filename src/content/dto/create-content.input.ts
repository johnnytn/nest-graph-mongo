import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateContentInput {
 /*  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
 */
/*   @Field(() => ID)
  _id: number
 */
  
  @Field({ nullable: false })
  name: string  
  
  @Field({ nullable: true })
  description?: string  
  
  @Field()
  type: string
}
