import { InputType, Field } from 'type-graphql';

@InputType()
export class SkillInput {
  @Field()
  readonly name: string;
  @Field()
  readonly documentationUrl: string;
}
