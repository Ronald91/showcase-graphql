import { Document } from 'mongoose';
export interface Skill extends Document {
  readonly name: string;
  readonly documentationUrl: string;
}
