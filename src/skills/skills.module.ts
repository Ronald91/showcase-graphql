import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SkillsResolver } from './skills.resolver';
import { SkillSchema } from './skills.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Skill',
        schema: SkillSchema,
      },
    ]),
  ],
  providers: [SkillsService, SkillsResolver],
})
export class SkillsModule {}
