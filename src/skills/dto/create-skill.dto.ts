import { ObjectType, Field, ID } from 'type-graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@ObjectType()
export class SkillType {
  @Field(() => ID)
  @IsString()
  readonly id: string;
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @Field()
  @IsString()
  readonly documentationUrl: string;
}
