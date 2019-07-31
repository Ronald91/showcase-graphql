import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Skill } from './interfaces/skill.interface';
import { SkillInput } from './input-skills.input';

@Injectable()
export class SkillsService {
  constructor(@InjectModel('Skill') private skillModel: Model<Skill>) {}

  async create(createSkillDto: SkillInput): Promise<Skill> {
    const createdSkill = new this.skillModel(createSkillDto);
    return await createdSkill.save();
  }

  async findAll(): Promise<Skill[]> {
    return await this.skillModel.find().exec();
  }

  async findOne(id: string): Promise<Skill> {
    return await this.skillModel.findOne({ _id: id });
  }
  async delete(id: string): Promise<Skill> {
    return await this.skillModel.findByIdAndRemove(id);
  }

  async update(id: string, skill: SkillInput): Promise<Skill> {
    return await this.skillModel.findByIdAndUpdate(id, skill, { new: true });
  }
}
