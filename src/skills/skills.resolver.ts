import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SkillsService } from './skills.service';
import { SkillType } from './dto/create-skill.dto';
import { SkillInput } from './input-skills.input';

@Resolver('Skills')
export class SkillsResolver {
  constructor(private readonly skillsService: SkillsService) {}

  @Query(() => [SkillType])
  async skills() {
    return this.skillsService.findAll();
  }

  @Mutation(() => SkillType)
  async createSkill(@Args('input') input: SkillInput) {
    return this.skillsService.create(input);
  }

  @Mutation(() => SkillType)
  async updateSkill(@Args('id') id: string, @Args('input') input: SkillInput) {
    return this.skillsService.update(id, input);
  }

  @Mutation(() => SkillType)
  async deleteSKill(@Args('id') id: string) {
    return this.skillsService.delete(id);
  }
}
